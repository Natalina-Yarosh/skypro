const wrapColorChange = document.querySelector(".wrap");
const textColorName = document.querySelector(".color_name");

const colorIntervalHandler = setInterval(() => {
  generateRandomColorHandle();
}, 1000);

function generateRandomColorHandle() {
  const length = 6,
    charset = "abcdefABCDEF0123456789";
  res = "";
  for (let i = 0, n = charset.length; i < length; ++i) {
    res += charset.charAt(Math.floor(Math.random() * n));
  }
  wrapColorChange.style.backgroundColor = "#" + res;
  return res;
}

function showColorWrapHandler() {
  clearInterval(colorIntervalHandler);
  textColorName.textContent = "#" + res;
}

wrapColorChange.onclick = showColorWrapHandler;
