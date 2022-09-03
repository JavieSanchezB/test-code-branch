const bracketMap = {
    "(": ")",
    "[": "]",
    "{": "}"
};

const doBracketsBalance = (str) => {
    const stack = [];

    for (let bracket of str) {
        if (bracketMap[bracket]) {
            stack.push(bracket);
        } else if (Object.values(bracketMap).includes(bracket)) {
            const poppedBracket = stack.pop();
            if (bracketMap[poppedBracket] !== bracket) {
                return false;
            }
        }
    }
    return stack.length === 0;
};

 //Export for test
 module.exports = doBracketsBalance;
