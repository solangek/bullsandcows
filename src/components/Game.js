import React, { useState } from "react";
import HighScores from "./score/HighScores";
import { generateAnswer, getBulls, getCows } from "./utils/Utils";
import History from "./history/History";
import GuessInput from "./GuessInput";
import Message from "./Message";
import MenuBar from "./menubar/MenuBar";

const Game = () => {
    const [guess, setGuess] = useState(new Array(4).fill(""));
    const [numberToGuess, setNumberToGuess] = useState(() => generateAnswer());
    const [history, setHistory] = useState([]);
    const [message, setMessage] = useState("Your history of guesses will appear below:");
    const [gameOver, setGameOver] = useState(false);

    const startNewGame = () => {
        setNumberToGuess(generateAnswer());
        setHistory([]);
        setGameOver(false);
        setMessage("Your history of guesses will appear below:");
        setGuess(new Array(4).fill(""));
    }

    const handleGuessChange = (event, index) => {
        const newGuess = [...guess];
        newGuess[index] = event.target.value;
        setGuess(newGuess);
    };

    const handleGuessSubmit = (event) => {
        event.preventDefault();
        // check that guess is valid (contains only digits)
        if (!guess.every((value) => value.match(/[0-9]/))) {
            setMessage("Please select 4 digits!");
            return;
        }
        // check if the guess exists in history
        if (history.some((historyItem) => historyItem.guess.join("") === guess.join(""))) {
            setMessage("You already guessed this number!");
            return;
        }
        const newHistory = [...history]; // copy history
        const newGuess = [...guess];
        const bulls = getBulls(newGuess, numberToGuess);
        const cows = getCows(newGuess, numberToGuess);
        // add to front of array
        newHistory.unshift({ id: newHistory.length + 1, guess: newGuess, bulls, cows });
        setHistory(newHistory);

        if (bulls === 4) {
            setMessage("");
            setGameOver(true);
        } else {
            setMessage(`Your guess: ${bulls} Bulls and ${cows} Cows`);
        }
    };

    return (
            <div className="bg-info bg-opacity-50 p-3">
                <MenuBar startNewGameHandler={startNewGame} />

                { gameOver ?
                    <HighScores score={history.length}/>
                :
                <>
                    <GuessInput guess={guess} handleGuessChange={handleGuessChange} handleGuessSubmit={handleGuessSubmit}/>
                    <Message message={message}/>
                    <History history={history}/>
                </>
                }
            </div>
    );
};

export default Game;