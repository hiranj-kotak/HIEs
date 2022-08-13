import React from "react";
import { Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DetailTable from "./components/DetailTable";

const Showrank = () => {
    return (
        <Container className="my-5">
            <Form.Group
                as={Row}
                className="mb-3"
                controlId="search"
                style={{ width: "28rem" }}
            >
                <Form.Label column sm="2">
                    Search
                </Form.Label>
                <Col sm="10">
                    <Form.Control placeholder="Enter institute name" />
                </Col>
            </Form.Group>

            <DetailTable />
        </Container>
    );
};

export default Showrank;
