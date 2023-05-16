import {Button, Row, Col} from "react-bootstrap";
import GuessDigitInput from "./GuessDigitInput";
import React from "react";

export default function GuessInput ({guess, handleGuessChange, handleGuessSubmit}) {
    return (
        <Row className={"mt-2"}>
            <Col>
                <form onSubmit={handleGuessSubmit}>
                    <Row>
                        {guess.map((guess, index) => <GuessDigitInput key={index} index={index} guess={guess} handleGuessChange={handleGuessChange}/>)}
                    </Row>
                    <Button className="mt-4" type="submit">Go!</Button>
                </form>
            </Col>
        </Row>
    )
}