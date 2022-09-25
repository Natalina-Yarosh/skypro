const buttonBack = document.querySelector(".btn_back");
const inputs = document.querySelectorAll(".form__input");

function goBackHandler(event) {
  let count = 0;
  for (const input of inputs) {
    if (input.value === "пожалуйста") {
      count += 1;
    }
  }
  if (count >= 3) {
  } else {
    alert("попробуй еще: нижний регистр");
    event.preventDefault();
  }
}

if (buttonBack) {
  buttonBack.onclick = goBackHandler;
}
