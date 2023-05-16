import HistoryItem from "./HistoryItem";
import {Table} from "react-bootstrap";
import React from "react";
import {Col, Row} from "react-bootstrap";

export default function History ({history}) {
    return (
        <Row className={"mt-2"}>
            <Col>
                <Table bordered style={{backgroundColor: "#ffffff", color: "black"}}>
                    <thead>
                    <tr>
                        <th>Guess</th>
                        <th>Bulls</th>
                        <th>Cows</th>
                    </tr>
                    </thead>
                    <tbody>
                    {history.map((historyItem, index) =>
                        <HistoryItem historyItem={historyItem} />
                    )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}