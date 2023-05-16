import {Col, Form, Row} from "react-bootstrap";
import React from "react";

export default function GuessDigitInput({ index, guess, handleGuessChange}) {
    return (
        <Col key={index}>
            <Form.Select aria-label="Default select example" key={index}
                         onChange={(event) => handleGuessChange(event, index)} value={guess[index]}>
                <option>Guess...</option>
                {[...Array(10)].map((_, i) => (
                    <option key={i} value={i}>
                        {i}
                    </option>
                ))}
            </Form.Select>
        </Col>
    )
}