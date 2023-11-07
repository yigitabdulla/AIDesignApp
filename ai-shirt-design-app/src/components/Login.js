import { GoogleLogin } from "react-google-login"
import "../styles/login.css"
import LoginIcon from '@mui/icons-material/Login';

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Login() {

    const onSuccess = (res) => {
        console.log("Login success! Current user:", res.profileObj)
    }

    const onFailure = (res) => {
        console.log("Login failed! Res:", res)
    }


    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
                render={(renderProps) => (
                    <button
                        id="custom-google-login-button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="custom-google-button"
                    >
                        Login with Google <LoginIcon/>
                    </button>
                )}
            />
        </div>
    )
}

export default Login;