import React from "react";

export default function Instructions() {
    return (
        <span className={"m-3"}>
        <button className="btn btn-warning" type="button" data-bs-toggle="collapse"
                data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Game rules
        </button>

        <div className="collapse" id="collapseExample">
            <div className="card card-body">
                <p>The program generates a 4 digit number number, while the player tries to guess it.</p>
                <p>Each digit appears at most once. e.g. 1234 is valid, but 1233 is not valid.</p>
                <p>For every guess that the player makes, we display 2 values:
                    <br/>the number of bulls: 1 bull means the guess contains and the target number have 1 digit in common, and in the correct position.
                    <br/>the number of cows: 1 cow means the guess and the target have 1 digit in common, but not in correct position.
                </p>

                <p>
                    For example if the number to guess is 1234. Guessing 4321 will give 0 bulls and 4 cows. 3241 will give 1 bull and 3 cows.
                    4 bulls means that the user won the game.
                </p>
            </div>
        </div>
        </span>
    )
}