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

            setUser({ name: "", email: "", password: "", cpassword: "" });

            MySwal.fire({
                icon: "success",
                title: <p>Registration successfull</p>,
                text: `Thank you for registration ${name}`,
            });

            // Send user to backend is remaining
            navigate("/login");
        }
    };

    return (
        <Container className="my-5 d-flex justify-content-center">
            <Card style={{ width: "38rem" }}>
                <Card.Img variant="top" src={loginImg} />
                <Card.Body>
                    <Card.Title>Register</Card.Title>
                    <Form method="POST">
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>User name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter user name"
                                name="name"
                                autoComplete="off"
                                value={user.name}
                                onChange={handleInputs}
                                // id="name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"
                                autoComplete="off"
                                value={user.email}
                                onChange={handleInputs}
                                // id="email"
                            />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicPassword"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                name="password"
                                autoComplete="off"
                                value={user.password}
                                onChange={handleInputs}
                                // id="password"
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="formBasicConPassword"
                        >
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="Confirm Password"
                                name="cpassword"
                                autoComplete="off"
                                value={user.cpassword}
                                onChange={handleInputs}
                                // id="cpassword"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            type="submit"
                            onClick={postData}
                        >
                            Register
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default REgister;
