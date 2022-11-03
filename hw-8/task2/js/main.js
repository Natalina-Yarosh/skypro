let input = document.querySelector(".input");

input.addEventListener("focus", () => {
  console.log("1");

  document.addEventListener("keydown", function (event) {
    if (event.keyCode == "37") {
      if (input.previousElementSibling) {
        input.value = input.previousElementSibling.textContent;
        input.previousElementSibling.remove();
      }
    }
    if (event.keyCode == "39") {
      if (input.nextElementSibling) {
        input.value = input.nextElementSibling.textContent;
        input.nextElementSibling.remove();
      }
    }
  });
});
