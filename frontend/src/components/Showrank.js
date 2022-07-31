import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const data = {
    data: [
        {
            __id: "__ljhdsfjhdsiufuashf",
            Date: "05-10-2021",
            instituteName: "Charotar university of science and technology",
            NirfRank: 1,
            NaacRank: "A+",
            NbaRank: "tier-1",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjhsdfgdfssiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjhsvfdfssiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjhsvfdbssiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjhssfdvdfsiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjhssrtaesiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjhssfasiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhdsfjafasssiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
        {
            __id: "__ljhddffsfjafasssiufuashf",
            Date: "05-10-2021",
            instituteName: "CHARUSAT",
            NirfRank: 4,
            NaacRank: "A",
            NbaRank: "tier-2",
            doclink: "urlOfdocuments.com/urlparameters",
        },
    ],
};

const dataArray = data.data;

const dataTable = dataArray.map((u) => {
    return (
        <tr key={u.__id}>
            <td>{u.instituteName}</td>
            <td>{u.NaacRank}</td>
            <td>{u.NirfRank}</td>
            <td>{u.NbaRank}</td>
            <td>{u.Date}</td>
            <td>
                <a href={u.doclink}>view</a>
            </td>
        </tr>
    );
});

const Showrank = () => {
    // console.log(dataArray);
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

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Institute Name</th>
                        <th>NAAC Rank</th>
                        <th>NIRF Rank</th>
                        <th>NBA Rank</th>
                        <th>Changed on</th>
                        <th>Documents</th>
                    </tr>
                </thead>
                <tbody>{dataTable}</tbody>
            </Table>
        </Container>
    );
};

export default Showrank;
