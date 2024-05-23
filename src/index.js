import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Auth0Provider } from '@auth0/auth0-react';
import { ChakraProvider } from '@chakra-ui/react'
import toast, { Toaster } from 'react-hot-toast';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain="dev-em1esvfp8mnby7c3.us.auth0.com"
    clientId="lyqM5sayVqtQ7bvlhLfFSFkD1aeDWOs9"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
      
      <ChakraProvider>
        <App />
        <Toaster />
      </ChakraProvider>
    </Auth0Provider>
  </React.StrictMode>
);
