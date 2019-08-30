var numberOfBSTPossible = (number) => {
    return parseInt(factorial(2 * number) / (factorial(number + 1) * factorial(number)));
}


var factorial = (number) => {
    return (number != 1) ? number * factorial(number - 1) : 1;
}

module.exports = { numberOfBSTPossible }