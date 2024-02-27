import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from "@react-oauth/google";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="657242746922-36ja12efog1oq1e7da8i422cvqrbee12.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);


//clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}