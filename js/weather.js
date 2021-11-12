const cityName = document.querySelector("#weather span:first-child");
const weatherCondition = document.querySelector("#weather span:last-child");

const locKey = "LOCATION_KEY";

function saveLocation(lat, lon) {
  const loc = {
    lat: lat,
    lon: lon,
  };
  localStorage.setItem(locKey, JSON.stringify(loc));
}

function findWeather(lat, lon) {
  const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const main = data.weather[0].main;

      cityName.innerText = name;
      weatherCondition.innerText = `${main} / ${data.main.temp}`;
    });
}

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  saveLocation(lat, lon);
  findWeather(lat, lon);
}

function onGeoError() {
  alert("can't find you. No weather for you");
}

const savedPosition = localStorage.getItem(locKey);

if (savedPosition !== null) {
  const parseLoc = JSON.parse(savedPosition);
  findWeather(parseLoc.lat, parseLoc.lon);
} else {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
