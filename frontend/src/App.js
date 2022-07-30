import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "react-bootstrap";
import Formdetails from "./components/Formdetails";
import Home from "./components/Home";
import Login from "./components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Register from "./components/Register";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="form1" element={<Formdetails />} />
                    <Route exact path="login" element={<Login />} />
                    <Route exact path="register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
