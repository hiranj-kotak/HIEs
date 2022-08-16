import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

const NirfRank = () => {
    const [formValues, setFormValues] = useState([{ name: "", rank: "" }]);

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

    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            {formValues.map((element, index) => (
                <div className="form-inline" key={index}>
                    <Row>
                        <Form.Group as={Col} controlId="nba">
                            <Form.Label>NIRF institute type</Form.Label>
                            <Form.Control
                                size="lg"
                                className="mb-3"
                                type="text"
                                placeholder="NBA Accreditation"
                                name="name"
                                value={element.name || ""}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="nba">
                            <Form.Label>NIRF Rank</Form.Label>
                            <Form.Control
                                size="lg"
                                className="mb-3"
                                type="text"
                                placeholder="NBA Accreditation"
                                name="rank"
                                value={element.rank || ""}
                                onChange={(e) => handleChange(index, e)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="nba">
                            <div className="mb-2">&nbsp;</div>
                            {index ? (
                                <Button
                                    as={Col}
                                    size="lg"
                                    variant="outline-danger"
                                    onClick={() => removeFormFields(index)}
                                >
                                    Remove
                                </Button>
                            ) : null}
                        </Form.Group>
                    </Row>
                </div>
            ))}
            <Row>
                <Button
                    as={Col}
                    type="button"
                    variant="outline-success"
                    className="m-3"
                    size="md"
                    onClick={() => addFormFields()}
                >
                    Add
                </Button>
                <Button
                    as={Col}
                    variant="outline-primary"
                    className="m-3"
                    type="submit"
                    size="md"
                    onClick={handleSubmit}
                >
                    Save
                </Button>
            </Row>
        </form>
    );
};

export default NirfRank;
