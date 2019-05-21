'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let rows = table.querySelector('tbody').querySelectorAll('tr');
    for (let i = 0; i < rows.length; i++) {
        if (rows[i].innerHTML.indexOf('data-available') !== -1) {
            if (rows[i].innerHTML.indexOf('data-available="true"') !== -1) {
                rows[i].classList.add('available');
            } else {
                rows[i].classList.add('unavailable');
            }
        } else {
            rows[i].setAttribute('hidden', true);
        }
        let cells = rows[i].querySelectorAll('td');
        if (cells[2].innerText.indexOf('m') !== -1) {
            rows[i].classList.add('male');
        } else {
            rows[i].classList.add('female');
        }
        if (+(cells[1].innerText) < 18) {
            rows[i].style.textDecoration = 'line-through';
        }
    }
}
