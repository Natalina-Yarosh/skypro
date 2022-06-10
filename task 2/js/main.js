let btnOne = document.querySelector("#btnOne");
let btnTwo = document.querySelector("#btnTwo");
let btnThree = document.querySelector("#btnThree");
let body = document.querySelector("#body");

let r = 0;
let g = 0;
let b = 0;

function generatePassword(r, b, g) {
  body.style.background = `rgb( + ${r} + ,  + ${b} + ,  + ${g})`;
  console.log(r, b, g);
  return r, b, g;
}

btnOne.addEventListener("click", function () {
  r += 100;
  generatePassword(r, 0, 0);
  console.log(r);
});

btnTwo.addEventListener("click", function () {
  b += 10;
  generatePassword(0, b, 0);
  console.log(b);
});

btnThree.addEventListener("click", function () {
  g += 1;
  generatePassword(0, 0, g);
  console.log(g);
});
