import "../styles/App.css";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./components/Navbartop";
import React from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

export default function App({ Component, pageProps }) {
    return (
        <UserProvider>
            <Navbartop />
            <Component {...pageProps} />
        </UserProvider>
    );
}
