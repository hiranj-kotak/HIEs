import React, { useState } from "react";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from "email-validator";
import Link from "next/link";
//
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Login = () => {
    const MySwal = withReactContent(Swal);

    const router = useRouter();

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
            router.push("/");
        }
    };
    
    return (
        <div className="modal modal-signin position-static d-block bg-none py-5">
            <div className="modal-dialog">
                <div className="modal-content bordeer border-0 rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h2 className="fw-bold mb-0">Sign in here</h2>
                    </div>
                    <div className="modal-body p-5 pt-0">
                        <form className="">
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
                            <button
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                type="submit"
                                onClick={postData}
                            >
                                Sign in
                            </button>
                            <Form.Text className="text-muted">
                                By clicking Sign up, you agree to the terms of
                                use.
                            </Form.Text>
                            <hr className="my-4" />
                            <Link href={"/Signup"}>
                                <Button className="w-100 mb-2 btn btn-lg rounded-3 btn-primary">
                                    Or Sign up here
                                </Button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
