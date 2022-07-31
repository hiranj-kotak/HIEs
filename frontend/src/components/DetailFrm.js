import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import BGimg from "../assets/BG2.jpg";
import axios from "axios";
// const cors = require('cors')

const options = { method: "GET", url: "http://127.0.0.1:5000/api1" };

axios
    .request(options)
    .then(function (response) {
        console.log(response.data);
    })
    .catch(function (error) {
        console.error(error);
    });

const DetailFrm = () => {
    return (
        <>
            <Container className="my-5 d-flex justify-content-center">
                <Card style={{ width: "38rem" }}>
                    <Card.Img variant="top" src={BGimg} />
                    <Card.Body>
                        <Card.Title>Enter Yout collage details here</Card.Title>
                        <Form>
                            <Form.Group
                                className="mb-3"
                                controlId="instituteName"
                            >
                                <Form.Label>Institute Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Institute name"
                                />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>NIRF Rank</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="NIRF Rank"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>NBA Rank</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="NBA Rank"
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridPassword"
                                >
                                    <Form.Label>NAAC Rank</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="NAAC Rank"
                                    />
                                </Form.Group>
                            </Row>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
};

export default DetailFrm;
