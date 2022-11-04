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
import axios from "axios";
import { useUser } from "@auth0/nextjs-auth0";

// const requestURL = "http://34.228.196.30/college_detail/";
const requestURL = "http://127.0.0.1:5000/college_detail/";

// console.log("requestURL: ", requestURL);

const DetailFrm = () => {

    const { user, error, isLoading } = useUser();

    console.log("user: ", user);

    const MySwal = withReactContent(Swal);
    const institutes = [
        "overall",
        "university",
        "college",
        "research_institutes",
        "engineering",
        "management",
        "pharmacy",
        "medical",
        "dental",
        "law",
        "architecture",
    ];

    const [formValues, setFormValues] = useState([{ name: "", rank: "" }]);
    const [detail, setDetail] = useState({
        instituteName: "",
        NAAC: "",
        CGPA: "",
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
            instituteName: detail.instituteName,
            NAAC: detail.NAAC,
            CGPA: detail.CGPA,
            NBA: detail.NBA,
            NIRF: formValues,
        };

        if (detail.type === "university") {
            detail.subtype = "none";
        }

        const { instituteName, NAAC, CGPA, NBA } = detail;

        if (!instituteName || !NAAC || !CGPA || !NBA) {
            MySwal.fire({
                icon: "error",
                title: <p>Error!</p>,
                text: "All details are required",
            });
        } else {
            // console.log(detail);

            // setDetail({ instituteName: "", NAAC: "", CGPA: "", NBA: "" });

            const options = {
                method: "POST",
                url: requestURL,
                data: finalDetail,
            };

            axios
                .request(options)
                .then(function (response) {
                    const responseData = `
                    instituteName: ${response.data.instituteName}
                    NAAC: ${response.data.NAAC}
                    CGPA: ${response.data.CGPA}
                    NBA: ${response.data.NBA}
                    NIRF: ${JSON.stringify(response.data.NIRF)}
                    `;

                    MySwal.fire({
                        icon: "success",
                        title: <p>Thank you!</p>,
                        text: responseData,
                    });

                    console.log(response.data);
                })
                .catch(function (error) {
                    MySwal.fire({
                        icon: "error",
                        title: <p>ERROR!</p>,
                        text: error,
                    });

                    console.error(error);
                });

            // console.log(finalDetail);

            // alert(`
            // instituteName: ${finalDetail.instituteName}
            // NAAC: ${finalDetail.NAAC}
            // CGPA: ${finalDetail.CGPA}
            // NBA: ${finalDetail.NBA}
            // NIRF: ${JSON.stringify(finalDetail.NIRF)}
            // `);
            // setDetail({ instituteName: "", NAAC: "", CGPA: "", NBA: "" });
            // setFormValues([{ name: "", rank: "" }]);
        }
    };

    if (!user) {
        return (
            <div className="d-flex justify-content-center">
                <h1>Not logged in</h1>
            </div>
        )
    }
    else {

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
                                        name="instituteName"
                                        autoComplete="off"
                                        value={detail.instituteName}
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
                                            name="CGPA"
                                            autoComplete="off"
                                            value={detail.CGPA}
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
    }
};

export default DetailFrm;
