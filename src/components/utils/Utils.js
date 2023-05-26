const generateAnswer = () => {
    const answer = [];
    // generate 4 different random digits

    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let i = 0; i < 4; i++) {
        // pick a digit randomly from digits
        const randomIndex = Math.floor(Math.random() * digits.length);
        answer.push(digits[randomIndex]);
        // remove the digit from digits
        digits.splice(randomIndex, 1);
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