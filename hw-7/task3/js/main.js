const eventButton = document.querySelector(".event-button");
let counter = 1;

eventButton.onclick = () => {
  if (counter >= 0.09) {
    counter = counter / 2;
  }

  eventButton.style.opacity = counter;

  console.log(eventButton.style.opacity);
};
