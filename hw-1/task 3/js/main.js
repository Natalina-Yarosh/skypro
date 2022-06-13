let randomTitle = document.querySelector("#randomTitle");
let randomText = document.querySelector("#randomText");
let resultText = document.querySelector("#resultText");

function newTitle() {
  var expression = randomText.value;
  resultText.textContent = expression;

  return expression;
}

randomTitle.addEventListener("click", function () {
  newTitle();
});
