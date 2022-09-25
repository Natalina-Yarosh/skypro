const clickButton = document.querySelector(".button_click");

function buttonClickHandler() {
  const clicks = +clickButton.dataset.clicks + 1;
  clickButton.dataset.clicks = clicks;

  clickButton.setAttribute("disabled", "");

  setTimeout(function () {
    clickButton.removeAttribute("disabled");
  }, 1000);
}

clickButton.onclick = buttonClickHandler;
