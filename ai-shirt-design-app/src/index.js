import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google'
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import configureKonvaEditorStore from "./redux/store";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureKonvaEditorStore();

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='726899538432-jjmckcjuugvvg0vlp3ace9dmrhv2jrd3.apps.googleusercontent.com'>
      <Provider store={store}>
          <App />
        </Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
