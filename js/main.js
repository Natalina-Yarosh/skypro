function nameMonth(number) {
  let numberMonth = Number(prompt(number));

  if (numberMonth > 2 && numberMonth < 6) {
    console.log("весна");
    return;
  } else if (numberMonth > 5 && numberMonth < 9) {
    console.log("лето");
    return;
  } else if (numberMonth > 8 && numberMonth < 12) {
    console.log("осень");
    return;
  } else if (numberMonth == 12 || numberMonth == 1 || numberMonth == 2) {
    console.log("зима");
    return;
  }

  console.log("введите корректное значение");
}

nameMonth("Введите номер месяца");
