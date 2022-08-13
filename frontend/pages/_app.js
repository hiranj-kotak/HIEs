import "../styles/App.css";
import "../styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbartop from "./components/Navbartop";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbartop />
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
