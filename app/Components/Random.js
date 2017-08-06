/**
 * Created by kieranderfus on 8/4/17.
 */

module.exports = {
    uniqueRandomNumbers(numRandomNumbers, lowerLimit, upperLimit) {
        const uniqueNumbers = [];
        while (uniqueNumbers.length !== numRandomNumbers) {
            let currentRandomNumber = this.randomNumberInRange(lowerLimit, upperLimit);
            if (uniqueNumbers.indexOf(currentRandomNumber) === -1 )
                uniqueNumbers.push(currentRandomNumber);
        }
        return uniqueNumbers;
    },

    randomNumberInRange(lowerLimit, upperLimit) {
        return Math.floor( Math.random() * (1 + upperLimit - lowerLimit) ) + lowerLimit;
    }
};