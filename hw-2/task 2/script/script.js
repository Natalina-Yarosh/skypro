const city = document.querySelector("#city");
let result = [];
let resultNumber = [];

function showCoords(lat, lng) {
  console.log(lat, lng);

  result = cities.map(function (array) {
    return Math.sqrt(
      Math.pow(array.lat - lat, 2) + Math.pow(array.lng - lng, 2)
    );
  });

  console.log(result);

  resultNumber = result.map(function (num) {
    return num;
  });

  resultNumber.sort((a, b) => a - b);

  console.log(resultNumber);
  console.log(result);

  console.log(resultNumber[0], result.indexOf(resultNumber[0]));
  let resultIndex = result.indexOf(resultNumber[0]);
  city.textContent = cities[resultIndex].name;
}

navigator.geolocation.getCurrentPosition(function (data) {
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;

  showCoords(latitude, longitude);
});
