import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Navbartop = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Link href={"/"}>
                    <Navbar.Brand href="#">HIEs</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Link href={"/"}>
                            <Nav.Link href={"/"}>Home</Nav.Link>
                            {/* Home */}
                        </Link>
                        <Link href={"/DetailForm"}>
                            <Nav.Link href={"/DetailForm"}>Fill Detail here</Nav.Link>
                        </Link>
                        <Link href={"/detail"}>
                            <Nav.Link href={"/detail"}>Check Detail here</Nav.Link>
                        </Link>
                    </Nav>
                    <Link href={"/Signin"}>
                        <Button variant="outline-light" className="mx-3">
                            Sign In
                        </Button>
                    </Link>
                    <Link href={"/Signup"}>
                        <Button variant="outline-light">Sign up</Button>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbartop;
