/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {
    if (obj === null) {
        return null;
    }
    let objToReturn = {};
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {

            if (typeof obj[property] === 'object') {
                if (Array.isArray(obj[property])) {
                    objToReturn[property] = obj[property].slice(0);
                } else {
                    objToReturn[property] = clone(obj[property]);
                }
            } else {
                objToReturn[property] = obj[property];
            }
        }
    }
    return objToReturn;
}

