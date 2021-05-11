// 3.	 JS: кликаем по кнопке - видим в alert-е то, что введено в поле поиска. Не использовать onclick атрибут в разметке кода.

// document.getElementById('btn-search').addEventListener('click', () => alert(document.getElementById('input').value));

// 4.	Если ввести в поиск слово google и нажать кнопку НАЙТИ, то нужно показать в алерте “Yandex круче. Но это не точно”

// const text = document.getElementById('input');

// document.getElementById('btn-search').addEventListener('click', () => {
//     if ( text.value === 'google') {
//         alert('“Yandex круче. Но это не точно”')
//     } else {
//         alert(text.value)
//     }
// });


// 5.	Создать массив объектов. 3-4 объекта, каждый имеет свойства name и age. При нажатии на кнопку НАЙТИ также вывести ещё и св-во name первого объекта в массиве

// const arr = [
//     {name: 'aaa', age: 111},
//     {name: 'bbb', age: 222},
//     {name: 'ccc', age: 333},
//     {name: 'ddd', age: 444}
// ]

// const text = document.getElementById('input');

// document.getElementById('btn-search').addEventListener('click', () => {
//     if ( text.value === 'google') {
//         alert(`“Yandex круче. Но это не точно”, ${arr[0].name}`)
//     } else {
//         alert(`${text.value}, ${arr[0].name}`)
//     }
// });

// 6.	Создать функцию superSum, которая будет в алерте показывать сумму ЛЮБЫХ двух чисел, переданных этой функции через параметры 

// function superSum (a, b) {
//     alert(a + b);
// }

// let a = prompt('Введите превое число?'),
//     b = prompt('Введите второе число?');

// superSum(+a, +b);

// 7.	Создать массив из чисел в перемешку (не отсортированы). 
// С помощью цикла for найти максимальный и минимальный элементы в массиве

// const arr = [222, 345, 88, 12, 0, -24, 2000, 66, 1000];

// let findMax = [...arr],
//     findMin = [...arr]
//     maxNum = '',
//     minNum = '';

// for ( let i = 0; i < findMax.length; i++) {
//     for( let n = 0; n < findMax.length; n++) {
//         if (findMax[n] > findMax[i]) {
//             delete findMax[i];
//             maxNum = findMax[n];
//         }
//     }
// }
// for ( let i = 0; i < findMin.length; i++) {
//     for( let n = 0; n < findMin.length; n++) {
//         if (findMin[n] < findMin[i]) {
//             delete findMin[i];
//             minNum = findMin[n];
//         }
//     }
// }

// console.log(`Максимальное число в массиве = ${maxNum}`);
// console.log(`Минимальное число в массиве = ${minNum}`);


// 8.	Создать 2 переменные a и b… присвоить им любые значения. Потом программно поменять эти значения местами, не используя значения напрямую

// let a = "XXX"; 
// let b = "YYY";

// [a, b] = [b, a];

// console.log(a); // то что было изначально в b
// console.log(b); // то что было изначально в a


// 9.	Оформить алгоритм поиска максимального числа в массиве как функцию findMax (чтобы можно было передавать в неё любой массив чисел, а на выходе она возвращала нам максимальное число из массива)

// const arr = [222, 345, 88, 12, 0, -24, 2000, 66, 1000];

// 1-й способ
// function findMax(arr) {
//     return Math.max.apply(null, arr);
// }
// console.log(findMax(arr));

// 2-й способ
// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax(arr));


// 10.	показать alert с результатом поиска не сразу, а через 3 секунды после нажатия (всё то же самое, как и работало, в частности с “яндекс круче всех”, но с задержкой в 3 секунды)

// const arr = [
//     {name: 'aaa', age: 111},
//     {name: 'bbb', age: 222},
//     {name: 'ccc', age: 333},
//     {name: 'ddd', age: 444}
// ]

// const text = document.getElementById('input');

// function clearInput() {
//     text.value = '';
// }

// function request() {
//     if ( text.value === 'google') {
//         alert(`“Yandex круче. Но это не точно”, ${arr[0].name}`);
//         clearInput();
//     } else {
//         alert(`${text.value}, ${arr[0].name}`);
//         clearInput();
//     }
// }

// document.getElementById('btn-search').addEventListener('click', () => setTimeout(() => request(), 3000));