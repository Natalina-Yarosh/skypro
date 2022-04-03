/*1. Создайте пустой массив arr, затем создайте переменную number, добавьте данную переменную в массив arr. */
let arr = [];
let number = 10;
arr.push(number);
console.log(arr);

/*2. Выведете в консоль 2 раза слово “Привет”. */

let numberTwo = "Hello";

let i = 0;

while (i < 2) {
  console.log(numberTwo);
  i++;
}

/*3. Выведете в консоль цифры от 1 до 5. */

for (let i = 1; i < 6; i++) {
  console.log(i);
}

/* 4. Выведите в консоль числа от 7 до 22.*/

for (let i = 7; i < 23; i++) {
  console.log(i);
}

/*5. Создайте функцию, которая которая будет выводить в консоль рандомное число от 1 до 10. */
function random() {
  console.log(Math.random());
}

random();

/*6. Создайте функцию, которая принимает параметр n — число и генерирует массив до значения n.*/

function newArray(number) {
  let numberResult = Number(prompt(number));
  let sum = 0;
  for (let i = 1; i <= numberResult; i++) {
    sum += i;
  }
  console.log("Сумма элементов массива: " + sum);
}

newArray("Введите число");

/*7.Дан массив: `[10, 27, 33, 67, 90, 235, 353, 987, 1000]` .Необходимо вывести в консоль данный массив в обратном порядке. */

let arrSeven = [10, 27, 33, 67, 90, 235, 353, 987, 1000];
let arrSevenReverse = arrSeven.reverse();
console.log(arrSevenReverse);
