const fieldControl = document.querySelector(".input");

fieldControl.oninput = (event) => {
  let fieldControlValueTarget = event.target;
  let fieldControlValue = String(fieldControlValueTarget.value);
  const regex = /[аоиеёэыуюяАОИЕЁЭЫУЮЯ]/g;

  let checkFieldControlValue = fieldControlValue.match(regex);

  fieldControl.value = checkFieldControlValue.join("");

  return test;
};
