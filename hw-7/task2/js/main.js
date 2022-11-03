const eventButton = document.querySelector(".event-button");

eventButton.onclick = function () {
  const spot = document.createElement("h1");
  spot.classList.add("spot");
  spot.textContent = "Привет, пользователь!";

  this.parentNode.appendChild(spot);

  eventButton.remove();
};
