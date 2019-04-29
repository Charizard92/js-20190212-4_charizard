/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow (m, n) {
    if ( n === 1 ) {
        return m;
    } else {
        return m * pow (m, n-1);
    }
}

function checkNum (num) {
    if (+num >= 1 && isFinite(+num) && Math.ceil(+num) === +num ) {
        return true;
    } else {
        return false;
    }
}

let x = prompt ('Enter x');
let n = prompt ('Enter n');
/*let comment = 'Enter n';

do {
    n = prompt (comment);
    comment = 'Enter correct n';
} while (!checkNum(n));
*/
if (checkNum(n)) {
    alert(pow(x, n));
}
