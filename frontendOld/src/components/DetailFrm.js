import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import withReactContent from "sweetalert2-react-content";
// import axios from "axios";
// Bootstrap imports
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// assets imports

const institutes = [
    "architecture",
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

const DetailFrm = () => {
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();

    let name, value;

    const [detail, setDetail] = useState({
        institute: "",
        subtype: "architecture",
        type: "university",
        NIRF: "",
        NBA: "",
        NAAC: "",
    });

    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setDetail({ ...detail, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        if (detail.type === "university") {
            detail.subtype = "none";
        }

        const { institute, type, NIRF, NBA, NAAC } = detail;

        if (!institute || !type || !NIRF || !NBA || !NAAC) {
            MySwal.fire({
                icon: "error",
                title: <p>Error!</p>,
                text: "All details are required",
            });
        } else {
            console.log(detail);

            setDetail({ institute: "", type: "", NIRF: "", NBA: "", NAAC: "" });

            MySwal.fire({
                icon: "success",
                title: <p>Thank you!</p>,
                text: `your detial submited successfully`,
            });
            // Send user to backend is remaining
            navigate("/detail");
        }
    };

    //

    return (
        <>
            <Container className="my-5 d-flex justify-content-center">
                <Card
                    style={{ width: "38rem" }}
                    className="modal-content bordeer border-0 rounded-4 shadow p-4"
                >
                    {/* <Card.Img variant="top" src={BGimg} /> */}
                    <Card.Body>
                        <Card.Title>
                            <h1 className="fw-bold mb-4">
                                Enter institute details here
                            </h1>
                        </Card.Title>
                        <Form method="POST">
                            <Form.Group as={Col} controlId="instituteName">
                                <Form.Label>Institute Type</Form.Label>
                                <Form.Select
                                    size="lg"
                                    className="mb-3"
                                    aria-label="Default select example"
                                    name="type"
                                    autoComplete="off"
                                    value={detail.type}
                                    onChange={handleInputs}
                                >
                                    <option value="university">
                                        University
                                    </option>
                                    <option value="collage">Collage</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} controlId="instituteName">
                                <Form.Label>Institute Name</Form.Label>
                                <Form.Control
                                    size="lg"
                                    className="mb-3"
                                    type="text"
                                    placeholder="Institute name"
                                    name="institute"
                                    autoComplete="off"
                                    value={detail.institute}
                                    onChange={handleInputs}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="instituteType">
                                <Form.Label>Institute Sub Type</Form.Label>
                                <Form.Select
                                    size="lg"
                                    className="mb-3"
                                    aria-label="Default select example"
                                    name="subtype"
                                    autoComplete="off"
                                    value={detail.subtype}
                                    onChange={handleInputs}
                                    disabled={detail.type !== "collage"}
                                >
                                    {institutes}
                                </Form.Select>
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>NIRF Rank</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        className="mb-3"
                                        type="number"
                                        placeholder="NIRF Rank"
                                        name="NIRF"
                                        autoComplete="off"
                                        value={detail.NIRF}
                                        onChange={handleInputs}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>NBA Rank</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        className="mb-3"
                                        type="text"
                                        placeholder="NBA Rank"
                                        name="NBA"
                                        autoComplete="off"
                                        value={detail.NBA}
                                        onChange={handleInputs}
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridPassword"
                                >
                                    <Form.Label>NAAC Rank</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        className="mb-3"
                                        type="text"
                                        placeholder="NAAC Rank"
                                        name="NAAC"
                                        autoComplete="off"
                                        value={detail.NAAC}
                                        onChange={handleInputs}
                                    />
                                </Form.Group>
                            </Row>
                            <Button
                                size="lg"
                                className="w-100 mb-2 btn btn-lg rounded-3 btn-primary"
                                variant="primary"
                                type="submit"
                                onClick={postData}
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
