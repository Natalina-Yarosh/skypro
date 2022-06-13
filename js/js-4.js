/*1.*/
let arrOne = [1, 5, 4, 10, 0, 3];
for (let i = 0; i < arrOne.length; i++) {
  console.log(arrOne[i]);
  if (arrOne[i] === 10) {
    break;
  }
}

/*2.*/
let arrTwo = [1, 5, 4, 10, 0, 3];
arrTwo.indexOf(4);

/*3.*/
let arrThree = [1, 3, 5, 10, 20];
console.log(arrThree.join(" "));

/*4.*/
let arrFour = [];
let newArrFour = [];

for (let i = 0; i < 10; i++) {
  arrFour.push(Math.round(Math.random() * 10));

  if (arrFour[i] % 2 === 0) {
    newArrFour.push(arrFour[i]);
  }
}

console.log(arrFour);
console.log(newArrFour);

/*5.*/
let n = 3,
  m = 3;

let mas = [];

for (let i = 0; i < m; i++) {
  mas[i] = [];

  for (let j = 0; j < n; j++) {
    mas[i][j] = 1;
  }
}

console.log(mas);

/*6.*/
let arrSix = [1, 1, 1];
arrSix.push(2, 2, 2);
console.log(arrSix);

/*7.*/
let arrSeven = [9, 8, 7, "a", 6, 5];

let newArrSeven = arrSeven.filter(function (f) {
  return f !== "a";
});
console.log(newArrSeven);

/*8.*/
let arrEight = [9, 8, 7, 6, 5];
let numberEight = Number(prompt(""));

for (let i = 0; i < arrEight.length; i++) {
  if (arrEight[i] === numberEight) {
    alert("Это значение есть в массиве");
  } else {
    alert("этого значения нет в массиве");
  }
  break;
}

/*9.*/
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("abcdef");

/*10.*/
let arrTen = [];
let sum = 0;
let lenght = 6;

for (var i = 0; i < lenght; i++) {
  arrTen.push(Math.round(Math.random() * 9));
  sum += arrTen[i];
}

console.log((sum / lenght).toFixed(1));

/*11.*/

let arr = [
  [1, 2, 3],
  [4, 5, 6],
];
console.log(func(arr));

function func(arr) {
  let result = [];

  for (let elem of arr) {
    if (typeof elem == "object") {
      result = result.concat(func(elem));
    } else {
      result.push(elem);
    }
  }

  return result;
}

/*12.*/
let arrTwelve = [];
let lenghtTwelve = 10;

for (var i = 0; i < lenghtTwelve; i++) {
  arrTwelve.push(Math.round(Math.random() * 9));
}

for (var i = 0; i < lenghtTwelve; i++) {
  if (arrTwelve[i] === arrTwelve[arrTwelve.length - 1]) {
  } else {
    console.log(arrTwelve[i] + arrTwelve[i + 1]);
  }
}
console.log(arrTwelve);
