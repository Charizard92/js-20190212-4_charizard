/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {

    let massOfKeys = [];
    let currentPath = '';
    let recurseResult = '';

    for (let property in obj) {
        if (typeof obj[property] === 'object') {
            if (!Array.isArray(obj[property])) {
                currentPath = currentPath + property;

                recurseResult = find(obj[property], value);
                if (recurseResult !== null) {
                    currentPath = currentPath + '.';
                    if (!Array.isArray(recurseResult)) {
                        massOfKeys.push(currentPath + recurseResult)
                    } else {
                        for (let i = 0; i < recurseResult.length; i++) {
                            massOfKeys.push(currentPath + recurseResult[i]);
                        }
                    }

                }
            }
        } else {
            if (obj[property] === value) {
                massOfKeys.push(property);
            }
        }
        currentPath = '';
    }

    if (massOfKeys.length === 0) {
        return null;
    } else if (massOfKeys.length === 1) {
        return massOfKeys[0];
    } else {
        return massOfKeys;
    }


}

let obj = {
    A:1,
    B:2,
    C: {
        D:1,
        E:[3,4,5,1,6,7,8],
        F: {
            G:1,
            H:2
        },
        I: {
            J:1
        }
    },
    K: {
        L:1,
        M:1
    }
};
console.log(find(obj, 1));