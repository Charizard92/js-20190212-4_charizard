/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {

    resultString = '';
    for (let i = 0; i < data.length; i++) {
        if (data[i]["age"] <= age) {
            resultString = resultString + data[i]["name"] + ', ' + data[i]["balance"] + '\n';
        }
    }
    return resultString.slice(0,-1);
}
