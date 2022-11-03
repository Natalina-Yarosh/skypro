const eventButton = document.querySelector(".event-button");
const eventButtonWrap = document.querySelector(".wrap");

eventButton.onclick = () => {
  const spot = document.createElement("h1");
  spot.classList.add("spot");
  spot.textContent = "Привет, пользователь!";

  eventButtonWrap.appendChild(spot);

  eventButton.remove();
};
