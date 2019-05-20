'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let ul = document.createElement('ul');
    let point;
    for (let i = 0; i < friends.length; i++) {
        point = document.createElement('li');
        point.innerHTML = '' + friends[i].firstName + ' ' + friends[i].lastName;
        ul.appendChild(point)
    }
    return ul;
}
