let city = document.querySelector("#city");

function showCoords(lat, lng) {
  console.log(lat, lng);

  let latArray = [];
  let lngArray = [];

  latArray = cities.map(function (cities) {
    if (lat - cities.lat > 0 || lat - cities.lat < lat) {
      return lat - cities.lat;
    }
  });
  console.log(latArray);

  lngArray = cities.map(function (cities) {
    if (lng - cities.lng > 0 || lng - cities.lng < lng) {
      return lng - cities.lng;
    }
  });
  console.log(lngArray);

  let minNumber = (a, b) => {
    return a < b ? a : b;
  };

  let resLat = latArray.reduce(minNumber) + lat;
  let index = cities.map((el) => el.lat).indexOf(resLat); //получить индекс элемента в массиве и вывести название

  console.log(resLat, index);
  console.log(lngArray.reduce(minNumber) + lng);
}

navigator.geolocation.getCurrentPosition(function (data) {
  const latitude = data.coords.latitude;
  const longitude = data.coords.longitude;

  showCoords(latitude, longitude);
});
