window.apiData = `[
  {
    "link": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Naja-siamensis-indochinese-spitting-cobra-southwest-thailand.jpg"
  }]
  `;

const data = JSON.parse(apiData);

function showPhoto(data) {
  const dataImg = document.createElement("img");
  dataImg.src = data[0].link;
  dataImg.style.width = "100%";
  dataImg.style.height = "100%";
  dataImg.style.objectFit = "cover";
  dataImg.classList.add("wrap__image");
  dataImg.id = "dataImg";

  return dataImg;
}

const container = document.querySelector(".wrap");

document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded_hiding");
  container.appendChild(showPhoto(data));

  document.querySelector("#dataImg").onload = () =>
    document.body.classList.remove("loaded_hiding");
});
