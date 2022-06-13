let enter = document.querySelector("#enter");
if (enter) {
  enter.addEventListener("click", function () {
    location.href = "http://127.0.0.1:5500/hw-2/task%201/enter.html";
  });
}

const myTimeout = setTimeout(back, 5000);

function back() {
  history.back();
}
