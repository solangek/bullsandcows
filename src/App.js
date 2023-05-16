import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React, { useState } from 'react';
import Game from "./components/Game";
import Header from "./components/Header";
import { Container } from "react-bootstrap";

/* School solution of the bulls and cows game client
server side for writing the score is not included.
author: solange@edu.hac.ac.il
*/
function App() {
    return (
        <Container>
            <Header/>
            <Game />
        </Container>
    );
}

export default App;

