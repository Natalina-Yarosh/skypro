/* 1. */
const numbers = {
  keyin1: 1,
  keyin2: 2,
  keyin3: 3,
  keyin4: 4,
  keyin5: 5,
  keyin6: 6,
  keyin7: 7,
};

const numbersArray = Object.values(numbers);
let resultOne = numbersArray.filter((item) => item >= 3);

console.log(resultOne);

/*2. */
const d = new Date();

const today = {
  day: d.getDate(),
  month: d.getMonth(),
  year: d.getFullYear(),
};

console.log(today.day + "-" + today.month + "-" + today.year);

/*3. */

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = [
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
  "воскресенье",
];

const ob = Object.assign(...en.map((n, i) => ({ [n]: ru[i] })));

/*4. */
const week = {
  понедельник: "будний день",
  вторник: "будний день",
  среда: "будний день",
  четверг: "будний день",
  пятница: "будний день",
  суббота: "выходой день",
  воскресенье: "выходой день",
};

let textAlert = prompt("введите день недели");
const weekArr = Object.keys(week);

if (week[textAlert]) {
  console.log(week[textAlert]);
} else if (textAlert < 1 || textAlert > 7) {
  console.log("введите правильное значение");
} else {
  console.log(weekArr[textAlert - 1]);
}

/*5. */
const numbersFive = {
  key1: {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
  },
  key2: {
    keyin1: 4,
    keyin2: 5,
    keyin3: 6,
  },
};

let arr = [];
Object.values(numbersFive).forEach((value) => {
  arr.push(...Object.values(value));
});

arr.reduce((a, b) => a + b);

/*6. */

const months = {
  ru: [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ],
  en: [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ],
};

let language = prompt("Введите ru или en");
let arrMonth = [];

if (months[language]) {
  let month = prompt("Введите номер месяца, который вы хотите вывести");
  if (month < 1 || month > 12) {
    alert("введите правильное значение");
  } else {
    arrMonth = Object.values(months[language]);
    alert(arrMonth[month - 1]);
  }
} else {
  alert("введите правильное значение");
}
