import {GoogleLogout} from "react-google-login"

const clientId = "726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com"

function Logout() {

    const onSuccess = (res) => {
        console.log("Log out succesfull!")
    }

    return (
        <div id="signInButton">
            <GoogleLogout
                clientId= {clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;