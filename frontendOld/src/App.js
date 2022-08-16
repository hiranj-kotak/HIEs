import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "react-bootstrap";
import Home from "./components/Home";
import Signin from "./components/Signin";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Signup from "./components/Signup";
import Showrank from "./components/Showrank";
import DetailFrm from "./components/DetailFrm";
import DynemicForm from "./components/DynemicForm";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="detail" element={<Showrank />} />
                    <Route exact path="signin" element={<Signin />} />
                    <Route exact path="signup" element={<Signup />} />
                    <Route exact path="detailsfrm" element={<DetailFrm />} />
                    <Route exact path="/frm" element={<DynemicForm />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
