import {Alert, Button, Form} from "react-bootstrap";
import React, {useState} from "react";

function HighScoresForm({score, setScores}) {
    const [name, setName] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = { name, score };

        fetch("/api/highscores", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'datatype': 'json'
            },
            body: new URLSearchParams(data).toString(),
        })
            .then((response) => response.json())
            .then((data) => {
                setScores(data);
            })
            .catch((error) => {
                setErrorMessage("Hmm looks like we can't save your score. Please try again.");
            });
    };

    return (
        <>
            <Alert variant={'success'}>
                <h2>You won! your score is: {score}</h2>
                <p>You may enter your name below to record you score.</p>
            </Alert>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                        placeholder="Enter your name"
                    />
                </Form.Group>
                {errorMessage && <Alert variant={'danger'}>{errorMessage}</Alert>}
                <Button variant="primary" type="submit" className={"mt-3"}>
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default HighScoresForm;