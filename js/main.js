let firstPlay = document.querySelector("#firstPlay");

function nameMonth(number) {
  let numberMonth = Number(prompt(number));

  if (numberMonth > 2 && numberMonth < 6) {
    console.log("весна");
    return;
  } else if (numberMonth > 5 && numberMonth < 9) {
    console.log("лето");
    return;
  } else if (numberMonth > 8 && numberMonth < 12) {
    console.log("осень");
    return;
  } else if (numberMonth == 12 || numberMonth == 1 || numberMonth == 2) {
    console.log("зима");
    return;
  }

  console.log("введите корректное значение");
}

firstPlay.addEventListener("click", function () {
  nameMonth("Введите номер месяца");
});

let secondPlay = document.querySelector("#secondPlay");

let randomWordArr = [
  "Яблоко",
  "Груша",
  "Дыня",
  "Виноград",
  "Персик",
  "Апельсин",
  "Мандарин",
];

function getRandonWord(arr) {
  arr = arr.sort(() => Math.random() - 0.5);

  alert("Важен регистр слов:" + " " + arr);

  const one = prompt("Чему равнялся первый элемент массива?");
  const two = prompt("Чему равнялся последний элемент массива?");

  if (one === arr[0] && two === arr[arr.length - 1]) {
    console.log("Вы угадали оба элемента");
    return;
  } else if (one === arr[0] || two === arr[arr.length - 1]) {
    console.log("Вы были близки к победе!");
    return;
  } else {
    console.log("Вы ответили неверно");
    return;
  }
}

secondPlay.addEventListener("click", function () {
  getRandonWord(randomWordArr);
});

let thirdPlay = document.querySelector("#thirdPlay");

let puzzle = "У него огромный рот, он зовется …";
let puzzleAnswer = "бегемот";

function guessThePuzzle(puzzle, puzzleAnswer) {
  let answer = prompt(puzzle).toLowerCase();
  if (answer === puzzleAnswer) {
    alert("Вы угадали");
    return;
  } else {
    alert("Подсказка 1 - это животное");
    let answerTwo = prompt(puzzle).toLowerCase();

    if (answerTwo === puzzleAnswer) {
      alert("Вы угадали");
      return;
    } else {
      alert("Подсказка 2 - это большое животное");
      let answerThree = prompt(puzzle).toLowerCase();

      if (answerThree === puzzleAnswer) {
        alert("Вы угадали");
        return;
      } else {
        alert("Вы не угадали");
        return;
      }
    }
  }
}

thirdPlay.addEventListener("click", function () {
  guessThePuzzle(puzzle, puzzleAnswer);
});
