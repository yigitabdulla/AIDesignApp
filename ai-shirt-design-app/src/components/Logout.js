import {GoogleLogout} from "react-google-login"
import "../styles/login.css"
import LogoutIcon from '@mui/icons-material/Logout';

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Logout() {

    const onLogoutSuccess = (res) => {
        console.log("Log out succesfull!")
    }

    return (
        <div id="signInButton">
            <GoogleLogout
                clientId= {clientId}
                buttonText="Logout"
                onLogoutSuccess={onLogoutSuccess}
                render={(renderProps) => (
                    <button
                        id="custom-google-login-button"
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}
                        className="custom-google-button"
                    >
                        Logout<LogoutIcon/>
                    </button>
                )}
            />
        </div>
    )
}

export default Logout;