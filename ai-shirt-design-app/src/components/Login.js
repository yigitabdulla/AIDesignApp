import { GoogleLogin } from "@react-oauth/google"
import "../styles/login.css"
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { useState,useEffect,useContext } from "react";
import axios from "axios"
import { useCookies } from "react-cookie"
import { isEmpty } from 'lodash';
import {useNavigate} from "react-router-dom";
import {jwtDecode} from 'jwt-decode'



function Login() {

    const [cookies,setCookies] = useCookies(["access_token"])
    const [userCookie,setUserCookie] = useCookies(["user_info"])


    const navigate = useNavigate()

    const onLogoutSuccess = () => {
        console.log("Log out succesfull!")
        navigate("/")
        setCookies("access_token","")
        setUserCookie("user_info", "")
        window.localStorage.removeItem("user")
        window.location.reload()
    }

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
            
            const user = {
              name: response.name,
              email: response.email,
              picture: response.picture

            }
            //await axios.post("https://localhost:7253/api/auth", request);
            setCookies("access_token", response.accessToken);
            setUserCookie("user_info", user)
            window.location.reload()
          }
        } catch (e) {
          console.log(e);
        }
      };



    return (
        <>

            {!cookies.access_token ? <div className="custome-google-button">
                <GoogleLogin
                    
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onError={() => {
                        console.log('Login failed')
                    }}
                    
                />
            </div>
                :
              <div className="logout">
                 <button className="logout-button" onClick={onLogoutSuccess}>Logout</button>
              </div>
            }



        </>
    )
}

export default Login;