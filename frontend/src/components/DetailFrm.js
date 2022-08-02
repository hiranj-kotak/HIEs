import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import BGimg from "../assets/BG2.jpg";
// import axios from "axios";

const institutes = [
    "university",
    "architecture",
    "college",
    "dental",
    "engineering",
    "law",
    "managemnent",
    "medical",
    "pharmacy",
    "research_institutes",
].map((e) => {
    return (
        <option key={e} value={e}>
            {e}
        </option>
    );
});

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
};

const DetailFrm = () => {
    return (
        <>
            <Container className="my-5 d-flex justify-content-center">
                <Card style={{ width: "38rem" }}>
                    <Card.Img variant="top" src={BGimg} />
                    <Card.Body>
                        <Card.Title>Enter Yout collage details here</Card.Title>
                        <Form method="POST">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="instituteName">
                                    <Form.Label>Institute Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Institute name"
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="instituteType">
                                    <Form.Label>Institute Type</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        {institutes}
                                    </Form.Select>
                                </Form.Group>
                            </Row>
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
                            <Button
                                variant="primary"
                                type="submit"
                                onClick={handleSubmit}
                            >
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
