import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";

const Navbartop = () => {
    const { user, error, isLoading } = useUser();

    console.log("user: ", user);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;

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
                            <Nav.Link href={"/DetailForm"}>
                                Fill Detail here
                            </Nav.Link>
                        </Link>
                        <Link href={"/detail"}>
                            <Nav.Link href={"/detail"}>
                                Check Detail here
                            </Nav.Link>
                        </Link>
                    </Nav>

                    {user ? (
                        <Dropdown>
                            <Dropdown.Toggle
                                variant="outline-light"
                                id="dropdown-button-drop-start"
                                drop="start"
                            >
                                <Image
                                    roundedCircle
                                    src={user.picture}
                                    alt="user"
                                    width="30"
                                    height="30"
                                />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item>{user.email}</Dropdown.Item>
                                <Dropdown.Item>{user.name}</Dropdown.Item>
                                <Dropdown.Item href="/api/auth/logout">
                                    Logout
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    ) : (
                        <Link href={"/api/auth/login"}>
                            <Button variant="outline-light">Log in</Button>
                        </Link>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navbartop;
