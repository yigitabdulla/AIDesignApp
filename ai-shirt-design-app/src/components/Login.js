import { GoogleLogin } from "@react-oauth/google";
import "../styles/login.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Login() {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [user, setUser] = useState({
    name: "",
    familyName: "",
    email: "",
    googleId: "",
    imageUrl: "",
  });

  const navigate = useNavigate();

  const updateUser = (userData) => {
    setUser({
      ...user,
      ...userData,
    });
  };

  const onLogoutSuccess = (res) => {
    console.log("Log out succesfull!");
    setUser();
    setCookies("access_token", "");
    window.localStorage.removeItem("username");
    window.location.reload();
    navigate("/");
  };

  const responseGoogle = async (credentialResponse) => {
    console.log(jwtDecode(credentialResponse.credential));
    const response = jwtDecode(credentialResponse.credential);
    try {
      if (isEmpty(response.errors)) {
        const request = {
          IdToken: credentialResponse.credential,
          Email: response.email,
          Name: response.name,
          FirstName: response.given_name,
          LastName: response.family_name,
        };
        console.log(request);
        await axios.post("https://localhost:7253/api/auth", request);
        
        setCookies("access_token", response.accessToken);
        window.localStorage.setItem("user", JSON.stringify(response));
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      {!cookies.access_token ? (
        <div id="signInButton">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              responseGoogle(credentialResponse);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      ) : (
        <div id="signInButton">
          {/* <GoogleLogout
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
                Logout
                <LogoutIcon />
              </button>
            )}
          /> */}
        </div>
      )}
    </>
  );
}

export default Login;
