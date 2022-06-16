const clickButton = document.querySelector(".button_click");

function buttonClickHandler(el) {
  let clicks = +this.dataset.clicks;
  clicks += 1;
  this.dataset.clicks = clicks;

  clickButton.setAttribute("disabled", "");

  setTimeout(function () {
    console.log(this);
    clickButton.removeAttribute("disabled");
  }, 1000);
}

clickButton.onclick = buttonClickHandler;
