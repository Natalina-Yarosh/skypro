const desiredElement = document.querySelector(".desired-element");
const showPathElement = document.querySelector(".show-path");

function resetPathHandler(arraynew) {
  arraynew = [];
  return arraynew;
}

function showPathHandler() {
  let arraynew = [];
  for (let elem of document.querySelectorAll("*")) {
    elem.addEventListener("click", function () {
      arraynew.push(`${elem.tagName}`);
    });
  }
  console.log(arraynew);
  setTimeout(function () {
    showPathElement.textContent = arraynew.reverse().join(" > ");
  }, 0);
}

desiredElement.onclick = showPathHandler;
