import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from "email-validator";
//
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import loginImg from "../assets/loginPencil.jpg";

const Login = () => {
    const MySwal = withReactContent(Swal);

    const navigate = useNavigate();

    const [user, setUser] = useState({
        email: "",
        password: "",
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

        const { email, password } = user;

        if (!email || !password) {
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
        } else {
            console.log(user);

            MySwal.fire({
                icon: "success",
                title: <p>login successfull</p>,
                text: `Welcome back ${email}`,
            });

            setUser({ email: "", password: "" });

            // Send user to backend is remaining
            navigate("/");
        }
    };
    return (
        <>
            <Container className="my-5 d-flex justify-content-center">
                <Card style={{ width: "38rem" }}>
                    <Card.Img variant="top" src={loginImg} />
                    <Card.Body>
                        <Card.Title>Login</Card.Title>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter email"
                                    name="email"
                                    autoComplete="off"
                                    value={user.email}
                                    onChange={handleInputs}
                                />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone
                                    else.
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
                                />
                            </Form.Group>
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={postData}
                            >
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default Login;
