const buttonShowResult = document.querySelector(".form__textarea");
const inputs = document.querySelectorAll(".form__input");

function buttonShowResultHandler() {
  let arrayInputsResult = [];
  let parentInput = this.parentElement;
  let childrenInputs = parentInput.children;

  if (parentInput.nodeName === "FORM") {
    for (const child of childrenInputs) {
      if (child.tagName === "INPUT") {
        arrayInputsResult.push(child.value);
      }
    }
    setTimeout(function () {
      buttonShowResult.textContent = arrayInputsResult.join("  ");
    }, 0);
  } else {
    buttonShowResult.textContent =
      "этот элемент не является первым дочерним элементов в теге формы";
  }
}

for (let input of inputs) {
  input.onclick = buttonShowResultHandler;
}
