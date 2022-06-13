let city = document.querySelector("#city");

function showCoords(lat, lng) {
  console.log(lat, lng);
}

navigator.geolocation.getCurrentPosition(function (data) {
  console.log(data);
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;

  showCoords(latitude, longitude);
});
