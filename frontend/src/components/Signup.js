import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from "email-validator";
// bootstrap Imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
// assets imports
import loginImg from "../assets/loginPencil.jpg";

const REgister = () => {
    const MySwal = withReactContent(Swal);

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        cpassword: "",
    });

    let name, value;

    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setUser({ ...user, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword } = user;

        if (!name || !email || !password || !cpassword) {
            MySwal.fire({
                icon: "error",
                title: <p>Error!</p>,
                text: "All details are required",
            });
        } else if (validator.validate(email) == false) {
            MySwal.fire({
                icon: "error",
                title: <p>Error!</p>,
                text: "Please enter valid email",
            });
        } else if (password != cpassword) {
            MySwal.fire({
                icon: "error",
                title: <p>Error!</p>,
                text: "Password and confirm password must",
            });
        } else {
            console.log(user);

            MySwal.fire({
                icon: "success",
                title: <p>Registration successfull</p>,
                text: `Thank you for registration ${name}`,
            });

            setUser({ name: "", email: "", password: "", cpassword: "" });

            // Send user to backend is remaining
            navigate("/");
        }
    };
    const nevToIn = (e) => {
        e.preventDefault();
        navigate("/signin");
    };
    //
    return (
        <div className="modal modal-signin position-static d-block bg-none py-5">
            <div className="modal-dialog">
                <div className="modal-content bordeer border-0 rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Sign up here</h2>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form className="">
                            <div className="form-floating mb-3">
                                <input
                                    type="name"
                                    className="form-control rounded-3"
                                    placeholder="name@example.com"
                                    name="name"
                                    autoComplete="off"
                                    value={user.name}
                                    onChange={handleInputs}
                                />
                                <label htmlFor="floatingInput">User name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="email"
                                    className="form-control rounded-3"
                                    placeholder="name@example.com"
                                    name="email"
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                />
                                <label htmlFor="floatingInput">
                                    Email address
                                </label>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
                                </Form.Text>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control rounded-3"
                                    placeholder="Password"
                                    name="password"
                                    autoComplete="off"
                                    value={user.password}
                                    onChange={handleInputs}
                                />
                                <label htmlFor="floatingPassword">
                                    Password
                                </label>
                            </div>
                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control rounded-3"
                                    placeholder="Confirm Password"
                                    name="cpassword"
                                    autoComplete="off"
                                    value={user.cpassword}
                                    onChange={handleInputs}
                                />
                                <label htmlFor="floatingPassword">
                                    Confirm Password
                                </label>
                            </div>
                            <button
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                type="submit"
                                onClick={postData}
                            >
                                Sign up
                            </button>
                            <Form.Text className="text-muted">
                                By clicking Sign up, you agree to the terms of
                                use.
                            </Form.Text>
                            <hr className="my-4" />
                            <Button
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                type="submit"
                                onClick={nevToIn}
                            >
                                Already have an account? Login Here
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default REgister;
