'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
    let objToReturn = {
        min: 0,
        max: 0
    }
    let massOfSymbols = str.split('');
    let currentString = '';
    let massOfNums = [];

    // Getting numbers from string

    for (let i = 0; i < massOfSymbols.length; i++) {
        if (typeof parseInt(massOfSymbols[i]) === 'number' && !isNaN(parseInt(massOfSymbols[i]))) {
            currentString = currentString + massOfSymbols[i];
        } else if (massOfSymbols[i] === '-' && currentString === '') {
            currentString = currentString + massOfSymbols[i];
        } else if (massOfSymbols[i] === '.' && currentString !== '') {
            currentString = currentString + massOfSymbols[i];
        } else if (currentString && currentString !== '-' && currentString !== '-.') {
            massOfNums.push(parseFloat(currentString));
            currentString = '';
        }
    }
    if (currentString && currentString !== '-' && currentString !== '-.') {
        massOfNums.push(parseFloat(currentString));
    }

    // Finding min and max

    if (massOfNums.length > 0) {
        for (let i = 0; i < massOfNums.length; i++) {
            if (massOfNums[i] < objToReturn.min) {
                objToReturn.min = massOfNums[i];
            } else if (massOfNums[i] > objToReturn.max) {
                objToReturn.max = massOfNums[i];
            }
        }
    }

    return objToReturn;
}
