const city = document.querySelector("#city");
let result = [];
let resultNumbers = [];

function showCoords(lat, lng) {
  result = cities.map(function (array) {
    return Math.sqrt(
      Math.pow(array.lat - lat, 2) + Math.pow(array.lng - lng, 2)
    );
  });

  resultNumbers = result.map(function (num) {
    return num;
  });

  resultNumbers.sort((a, b) => a - b);
  let resultIndex = result.indexOf(resultNumbers[0]);
  city.textContent = cities[resultIndex].name;
}

navigator.geolocation.getCurrentPosition(function (data) {
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;

  showCoords(latitude, longitude);
});
