import {Alert, Col, Row} from "react-bootstrap";
import React from "react";

export default function Message({ message }) {
    return (
        <Row className={"mt-2"}>
            <Col>
                <Alert variant={"warning"}>{message}</Alert>
            </Col>
        </Row>
    )
}