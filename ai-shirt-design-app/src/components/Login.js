import { GoogleLogin } from "react-google-login"
import "../styles/login.css"
import LoginIcon from '@mui/icons-material/Login';
import { GoogleLogout } from "react-google-login"
import LogoutIcon from '@mui/icons-material/Logout';
import { useState } from "react";
import axios from "axios"
import { useCookies } from "react-cookie"
import { isEmpty } from 'lodash';

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Login() {

    const [cookies,setCookies] = useCookies(["access_token"])

    const [user, setUser] = useState({})
    const [isLoggedIn, setIsLoggedIn] = useState(false)


    const onSuccess = async (res) => {
        console.log("Login success! Current user:", res.profileObj)
        setUser(res.profileObj)
        setIsLoggedIn(true)

        try {
            if (user) {
                await axios.post("http://localhost:8000/auth/login", res.profileObj);
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    const onFailure = (res) => {
        console.log("Login failed! Res:", res)
    }

    const onLogoutSuccess = (res) => {
        console.log("Log out succesfull!")
        setUser()
        setIsLoggedIn(false)
        setCookies("access_token","")
        window.localStorage.removeItem("username")
        window.location.reload();
    }

    const responseGoogle = async (response) => {
        console.log(response.profileObj)
        response.profileObj && setIsLoggedIn(true)
        try {
            if (isEmpty(response.errors)) {
                await axios.post('http://localhost:8000/auth/login', response.profileObj);
                console.log(response)
                setCookies("access_token",response.accessToken)
                window.localStorage.setItem("username",response.profileObj.name)
            }
        }
        catch (e) {
            console.log(e);
        }
    }




    return (
        <>

            {!isLoggedIn ? <div id="signInButton">
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    render={(renderProps) => (
                        <button
                            id="custom-google-login-button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                            className="custom-google-button"
                        >
                            Login with Google <LoginIcon />
                        </button>
                    )}
                />
            </div>
                :
                <div id="signInButton">
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={onLogoutSuccess}
                        render={(renderProps) => (
                            <button
                                id="custom-google-login-button"
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="custom-google-button"
                            >
                                Logout<LogoutIcon />
                            </button>
                        )}
                    />
                </div>
            }



        </>
    )
}

export default Login;