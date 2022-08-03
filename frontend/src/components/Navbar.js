import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { LinkContainer } from "react-router-bootstrap";

const navbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand href="/">HIEs</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <LinkContainer to="/">
                            <Nav.Link href="">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/detailsfrm">
                            <Nav.Link href="">Fill Detail here</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/detail">
                            <Nav.Link href="">Check Detail here</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <LinkContainer to="/signin">
                        <Button variant="outline-light" className="mx-3">Sign In</Button>
                    </LinkContainer>
                    <LinkContainer to="/signup">
                        <Button variant="outline-light">Sign up</Button>
                    </LinkContainer>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default navbar;
