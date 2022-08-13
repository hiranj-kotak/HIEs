import React from "react";
import Table from "react-bootstrap/Table";

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

const DetailTable = (props) => {
    return (
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
            <tbody>
                {data.data.map((u) => {
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
                })}
            </tbody>
        </Table>
    );
};

export default DetailTable;
