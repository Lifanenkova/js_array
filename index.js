'use strict';

// 0 Создать числовой массив и проинициализировать его (*случайными числами).
const myArr = [];
for(let i = 0; i < 100; i++){
    myArr[i] = Math.round(Math.random() * 100);
}
console.table(myArr);

// 1 Удалить последний элемент из массива, добавить по элементу в начало и конец.
myArr.pop();
myArr.unshift(222);
myArr.push(111);
console.table(myArr);

// 2 Вывести размер массива.
 console.log(`Length of myArr - ${myArr.length} elements`);

// 3 Вывести элементы с четными индексами.
for(let i = 0; i < myArr.length; i += 2){
    console.log(`${i} - ${myArr[i]}`);
}

// 4 Вывести только четные элементы (четные числа делятся на 2 без остатка).
for(let i = 0; i < myArr.length; i++){
    if(myArr[i] % 2 === 0){
    console.log(myArr[i]);
    }
}

// 5 Вывести индексы нулевых элементов (элемент равен нулю).
let countZero = 0;
for(let i = 0; i < myArr.length; i++){
    if(myArr[i] === 0){
        countZero++;
    console.log(`Index of 0 - ${i}`);
    }
}
if(countZero === 0){
console.log('Sorry, no zero!');
}
// 6 Подсчитать количество нулевых элементов.
console.log(`Count of zero - ${countZero} element(s)`);

// // Методы перебора массивов.
// 7 Получить новый массив из заданного, который будет содержать только положительные числа (-1, 5, 0, 9, -10 => 5, 9).
const someArray = [-1, 5, 0, 9, -10];
const evenArray = someArray.filter(element => element > 0);
console.table(evenArray);

// 8 Получить новый массив их заданного, который будет содержать все элементы исходного, возведенные в квадрат (-1, 5, 0, 9, -10 => 1, 25, 0, 81, 100).
const squaredArray = someArray.map(element => Math.pow(element,2));
console.table(squaredArray);

// 9 Проверить, являются ли все елементы массива положительными числами (* или в принципе числами).
console.log(someArray.every(element => element > 0));
console.log(someArray.every(element => isNaN(element)));

// 10 Проверить, есть ли в массиве хоть один отрицательный элемент.
console.log(someArray.some(element => element < 0));

// 11 Вывести элементы массива, возведенные в куб.
someArray.forEach(element => {
    console.log(`${element} ^ 3 = ${Math.pow(element,3)}`);
});

// *12 Прописать для MyArray метод unshift.
function MyArray(){
    if(!new.target){
        return new MyArray();
    }
    this.length = 0;
    this.unshift = function(item){
        for(let i = this.length-1; i >= 0; i--){
            this[i+1] = this[i];
        }
    this[0] = item;
    return ++this.length;
    };
    this.push = function(item){
        this[this.length] = item;
        return ++this.length;
    };
}

const myarray = new MyArray();
myarray.push(4);
myarray.push(3);
console.table(myarray);
myarray.unshift(6);
console.table(myarray);