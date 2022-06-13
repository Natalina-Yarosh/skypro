let btnOne = document.querySelector("#btnOne");
let btnTwo = document.querySelector("#btnTwo");
let btnThree = document.querySelector("#btnThree");
let body = document.querySelector("#body");

let r = 0;
let g = 0;
let b = 0;
let result = "";

function generateRed(r) {
  result = `rgb(${r}, ${g}, ${b})`;
  console.log(result);

  body.style.background = result;
  return result;
}

function generateGreen(g) {
  result = `rgb(${r}, ${g} , ${b})`;
  console.log(result);

  body.style.background = result;
  return result;
}

function generateBlue(b) {
  result = `rgb(${r}, ${g}, ${b})`;
  console.log(result);

  body.style.background = result;
  return result;
}

btnOne.addEventListener("click", function () {
  if (r < 255) {
    r += 5;
    generateRed(r);
  } else {
    generateRed(255);
  }
  console.log(r);
});

btnTwo.addEventListener("click", function () {
  if (g < 255) {
    g += 5;
    generateGreen(g);
  } else {
    generateGreen(255);
  }
  console.log(g);
});

btnThree.addEventListener("click", function () {
  if (b < 255) {
    b += 5;
    generateBlue(b);
  } else {
    generateBlue(255);
  }

  console.log(b);
});
