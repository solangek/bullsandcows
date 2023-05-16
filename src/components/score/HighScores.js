import React, { useState } from "react";
import { Button, Col, Container, Row, Alert, Table } from 'react-bootstrap';
import HighScoresForm from "./HighScoresForm";

function HighScore({score}) {

  const [scores, setScores] = useState([]);

  return (
    <Container>
        {(scores.length == 0)  &&
          <Row>
            <Col>
              <HighScoresForm score={score} setScores={setScores} />
            </Col>
          </Row>
        }
        { (scores.length != 0)  &&
        <Row>
            <Col>
                <Alert variant={'secondary'} className={"mt-3"}>
                <h1>High Scores</h1>
                <Table className={"bg-light"}>
                    <thead>
                    <tr>
                        <th>#</th><th>Username</th><th>Score</th>
                    </tr>
                    </thead>
                    <tbody>
                    {scores.map((score, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td><td>{score.name}</td><td>{score.score}</td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
                </Alert>
            </Col>
        </Row>
        }

    </Container>
  );
}

export default HighScore;
