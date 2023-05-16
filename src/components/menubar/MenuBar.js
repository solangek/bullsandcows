import {Col, Row} from "react-bootstrap";
import Instructions from "./Instructions";
import React from "react";

export default function MenuBar({startNewGameHandler}) {
    return (
        <Row>
            <Col>
                <button className="btn btn-danger" type="button" onClick={startNewGameHandler}>
                    Start new game
                </button>

                <Instructions/>
            </Col>
        </Row>
    )
}