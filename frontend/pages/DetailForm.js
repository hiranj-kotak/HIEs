import React, { useState } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import withReactContent from "sweetalert2-react-content";
import Head from "next/head";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const DetailFrm = () => {
    const MySwal = withReactContent(Swal);

    const institutes = [
        "architecture",
        "dental",
        "engineering",
        "law",
        "managemnent",
        "medical",
        "pharmacy",
        "research_institutes",
    ];

    const [formValues, setFormValues] = useState([{ name: "", rank: "" }]);
    const [detail, setDetail] = useState({
        institute: "",
        NAAC: "",
        NAACCGPA: "",
        NBA: "",
    });

    let finalDetail;

    // Nirf functions

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
    };

    let addFormFields = () => {
        setFormValues([...formValues, { name: "", rank: "" }]);
    };

    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues);
    };

    let handleSubmit = () => {
        // console.log(formValues);
    };

    // end

    let name, value;

    const handleInputs = (e) => {
        // console.log(e);
        name = e.target.name;
        value = e.target.value;

        setDetail({ ...detail, [name]: value });
    };

    const postData = async (e) => {
        e.preventDefault();

        handleSubmit();
        finalDetail = {
            institute: detail.institute,
            NAAC: detail.NAAC,
            NAACCGPA: detail.NAACCGPA,
            NBA: detail.NBA,
            NIRF: formValues,
        };

        if (detail.type === "university") {
            detail.subtype = "none";
        }

        const { institute, NAAC, NAACCGPA, NBA } = detail;

        if (!institute || !NAAC || !NAACCGPA || !NBA) {
            MySwal.fire({
                icon: "error",
                title: <p>Error!</p>,
                text: "All details are required",
            });
        } else {
            // console.log(detail);

            setDetail({ institute: "", NAAC: "", NAACCGPA: "", NBA: "" });

            MySwal.fire({
                icon: "success",
                title: <p>Thank you!</p>,
                text: `your detial submited successfully`,
            });

            console.log(finalDetail);
            alert(JSON.stringify(finalDetail));
            setDetail({ institute: "", NAAC: "", NAACCGPA: "", NBA: "" });
            setFormValues([{ name: "", rank: "" }]);
        }
    };

    return (
        <>
            <Container className="my-5 d-flex justify-content-center">
                <Head>
                    <title>Create Next App</title>
                    <meta
                        name="description"
                        content="Generated by create next app"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Card
                    style={{ width: "38rem" }}
                    className="modal-content bordeer border-0 rounded-4 shadow p-0"
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
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="naacGrade">
                                    <Form.Label>NAAC Grade</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="NAAC Grade"
                                        name="NAAC"
                                        autoComplete="off"
                                        value={detail.NAAC}
                                        onChange={handleInputs}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="naacCgpa">
                                    <Form.Label>NAAC CGPA</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        className="mb-3"
                                        type="text"
                                        placeholder="NAAC CGPA"
                                        name="NAACCGPA"
                                        autoComplete="off"
                                        value={detail.NAACCGPA}
                                        onChange={handleInputs}
                                    />
                                </Form.Group>
                                <Form.Group as={Col} controlId="nba">
                                    <Form.Label>NBA</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        className="mb-3"
                                        type="text"
                                        placeholder="NBA Accreditation"
                                        name="NBA"
                                        autoComplete="off"
                                        value={detail.NBA}
                                        onChange={handleInputs}
                                    />
                                </Form.Group>
                            </Row>
                            <Form.Label className="mb-1">NIRF</Form.Label>
                            <form onSubmit={handleSubmit}>
                                {formValues.map((element, index) => (
                                    <div className="form-inline" key={index}>
                                        <Row>
                                            <Form.Group
                                                as={Col}
                                                controlId="nba"
                                            >
                                                <Form.Label>
                                                    Institute
                                                </Form.Label>
                                                {/* <Form.Control
                                                    size="lg"
                                                    className="mb-3"
                                                    type="text"
                                                    placeholder="NIRF Institute type"
                                                    name="name"
                                                    value={element.name || ""}
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                /> */}
                                                <Form.Select
                                                    size="lg"
                                                    className="mb-3"
                                                    aria-label="Default select example"
                                                    name="name"
                                                    value={
                                                        element.name || "none"
                                                    }
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                >
                                                    <option
                                                        value="none"
                                                        disabled
                                                    >
                                                        Select Institute
                                                    </option>
                                                    {institutes.map((e) => {
                                                        return (
                                                            <option
                                                                key={e}
                                                                value={e}
                                                            >
                                                                {e
                                                                    .charAt(0)
                                                                    .toUpperCase() +
                                                                    e.slice(1)}
                                                            </option>
                                                        );
                                                    })}
                                                </Form.Select>
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId="nba"
                                            >
                                                <Form.Label>Rank</Form.Label>
                                                <Form.Control
                                                    size="lg"
                                                    className="mb-3"
                                                    type="text"
                                                    placeholder="NIRF rank"
                                                    name="rank"
                                                    value={element.rank || ""}
                                                    onChange={(e) =>
                                                        handleChange(index, e)
                                                    }
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                as={Col}
                                                controlId="nba"
                                            >
                                                <div className="mb-2">
                                                    &nbsp;
                                                </div>
                                                {index ? (
                                                    <Button
                                                        as={Col}
                                                        size="lg"
                                                        variant="outline-danger"
                                                        onClick={() =>
                                                            removeFormFields(
                                                                index
                                                            )
                                                        }
                                                    >
                                                        Remove
                                                    </Button>
                                                ) : null}
                                            </Form.Group>
                                        </Row>
                                    </div>
                                ))}

                                <Button
                                    as={Col}
                                    type="button"
                                    variant="outline-success"
                                    className="mb-3"
                                    size="lg"
                                    onClick={() => addFormFields()}
                                >
                                    Add More
                                </Button>
                            </form>
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
