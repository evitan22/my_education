// Поиск по селектору класса
// const elemsOne = document.querySelectorAll('.lesson_list');
// console.log(elemsOne); 

// Поиск по селектору тега
// const elemsTwo = document.querySelectorAll('.li');
// console.log(elemsTwo);

// Поиск по смешанному селектору тега и класса
// const elemsThree = document.querySelectorAll('.li.lesson__item-list');
// console.log(elemsThree);

// Поиск по тегу первого уровня вложенности
// const elemsFour = document.querySelectorAll('.lesson_list>li');
// console.log(elemsFour);

// Поиск по нескольким классам
// const elemsFive = document.querySelectorAll('.lesson_list, .lesson_text');
// console.log(elemsFive);

// Поиск по вложенным классам
// const elemsSix = document.querySelectorAll('.lesson_list .lesson_text');
// console.log(elemsSix);

// Поиск по ID
// const elemsSeven = document.querySelectorAll('#listItem');
// console.log(elemsSeven);

// Поиск по атрибуту
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// Поиск по атрибуту со значением
// const elemsNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);

// Получение конкретного элемента коллекции
// const elems = document.querySelectorAll('li');
// console.log(elems[2]);

//Способ 1
// for (let child of document.body.childNodes) {
//     console.log(child);
// }

//Способ 2
// let arr = Array.from(document.body.childNodes);
// arr.forEach(elem => console.log(elem));

let html = document.documentElement;
console.log(html.hasChildNodes());
console.log(html.parentNode);
console.log(html.parentElement);
console.log(table_digs.rows[0].cells[1].innerHTML);

console.log(document.head.nextSibling);
console.log(document.body.previousSibling);
