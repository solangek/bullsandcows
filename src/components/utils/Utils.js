const generateAnswer = () => {
    const answer = [];
    // generate 4 different random digits

    while (answer.length < 4) {
        const randomDigit = Math.floor(Math.random() * 10);
        if (!answer.includes(randomDigit)) {
            answer.push(randomDigit);
        }
    }

    console.log("guess:" + answer)
    return answer;
}

const getBulls = (guess, answer) => {
    let bulls = 0;
    for (let i = 0; i < 4; i++) {
        if (parseInt(guess[i]) === answer[i]) {
            bulls++;
        }
    }
    return bulls;
}

const getCows = (guess, answer) => {
    let cows = 0;
    for (let i = 0; i < 4; i++) {
        if (parseInt(guess[i]) !== answer[i] && answer.includes(parseInt(guess[i]))) {
            cows++;
        }
    }
    return cows;
}

export { generateAnswer, getBulls, getCows };