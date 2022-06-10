let randomPass = document.querySelector("#randomPass");
let randomText = document.querySelector("#randomText");

function generatePassword() {
  var length = 8,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  res = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    res += charset.charAt(Math.floor(Math.random() * n));
  }
  randomText.value = res;
  return res;
}

randomPass.addEventListener("click", function () {
  generatePassword();
});
