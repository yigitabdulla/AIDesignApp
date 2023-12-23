import { GoogleLogin } from "react-google-login"
import "../styles/login.css"
import LoginIcon from '@mui/icons-material/Login';
import { GoogleLogout } from "react-google-login"
import LogoutIcon from '@mui/icons-material/Logout';
import { useState,useEffect } from "react";
import axios from "axios"
import { useCookies } from "react-cookie"
import { isEmpty } from 'lodash';
import {useNavigate} from "react-router-dom";

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Login() {

    const [cookies,setCookies] = useCookies(["access_token"])
    const [user, setUser] = useState({name: '',
    familyName: '',
    email: '',
    googleId: '',
    imageUrl: '',})

    const navigate = useNavigate()

    const updateUser = (userData) => {
        setUser({
          ...user,
          ...userData,
        });
      };

    const onLogoutSuccess = (res) => {
        console.log("Log out succesfull!")
        setUser()
        setCookies("access_token","")
        window.localStorage.removeItem("username")
        window.location.reload()
        navigate("/")
    }

    const responseGoogle = async (response) => {
        console.log(response.profileObj)
        try {
            if (isEmpty(response.errors)) {
                await axios.post('http://localhost:8000/auth/login', response.profileObj);
                console.log(response)
                setCookies("access_token",response.accessToken)
                window.localStorage.setItem("user",JSON.stringify(response.profileObj))
            }
        }
        catch (e) {
            console.log(e);
        }
    }


    return (
        <>

            {!cookies.access_token ? <div id="signInButton">
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