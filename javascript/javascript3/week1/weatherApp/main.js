const getCityBtn = document.getElementById("show-by-city");
const byPositionBtn = document.getElementById("show-by-position");
const cityInput = document.querySelector("input");
const weatherIcon = document.getElementById("weather-icon");
const resultBlock = document.querySelector(".weather-result-container");
const showMap = document.getElementById("show-map");
const apiKey = "5a9f05de702d708299f07803e54ed74d";
let map;

getCityBtn.addEventListener("click", () => {
  resultBlock.style.opacity = "0";
  document.getElementById("map-container").style.opacity = "0";
  const cityValue = cityInput.value;
  if (cityValue === "") {
    alert("Please input city name!");
  } else {
    (async function () {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
      );
      if (response.ok) {
        const content = await response.json();
        showWeather(content);
      } else {
        alert("Sorry, information not found!");
      }
    })();
  }
});

byPositionBtn.addEventListener("click", () => {
  resultBlock.style.opacity = "0";
  document.getElementById("map-container").style.opacity = "0";
  navigator.geolocation.getCurrentPosition(
    (currentPosition) => {
      const currentLatitude = currentPosition.coords.latitude;
      const currentLongitude = currentPosition.coords.longitude;
      localStorage.setItem("lon", currentLongitude);
      localStorage.setItem("lat", currentLatitude);
      showWeatherByPosition(currentLongitude, currentLatitude);
    },
    (error) => alert(error.message)
  );
});
function showWeatherByPosition(lon, lat) {
  (async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );
    if (response.ok) {
      const content = await response.json();
      showWeather(content);
      initMap(lon, lat);
    } else {
      alert("Sorry, information not found!");
    }
  })();
}
function showWeather(content) {
  document.getElementById("city-name").innerText = content.name;
  let sunRiseDate = new Date(content.sys.sunrise * 1000);
  let sunSetDate = new Date(content.sys.sunset * 1000);

  document.getElementById("today-date").innerText =
    sunRiseDate.toLocaleDateString();

  weatherIcon.src = `http://openweathermap.org/img/wn/${content.weather[0].icon}@2x.png`;

  document.getElementById("current-temp").innerHTML = `${parseInt(
    content.main.temp
  )} &#x2103;`;

  document.getElementById("wind-speed").innerText = `Wind: ${parseInt(
    content.wind.speed
  )}m/s`;
  document.getElementById(
    "clouds"
  ).innerText = `Clouds: ${content.clouds.all}%`;
  document.getElementById(
    "sun-rise"
  ).innerText = `Sunrise at: ${sunRiseDate.toLocaleTimeString()}`;
  document.getElementById(
    "sun-set"
  ).innerText = `Sunrset at: ${sunSetDate.toLocaleTimeString()}`;
  resultBlock.style.opacity = "1";
  localStorage.setItem("lon", content.coord.lon);
  localStorage.setItem("lat", content.coord.lat);

  if (showMap.checked) {
    initMap(content.coord.lon, content.coord.lat);
  }
}

function initMap(lon, lat) {
  map = new google.maps.Map(document.getElementById("map-container"), {
    center: { lat: lat, lng: lon },
    zoom: 12,
  });
  document.getElementById("map-container").style.opacity = "1";
}

if (localStorage.getItem("lon") && localStorage.getItem("lat")) {
  showWeatherByPosition(
    Number(localStorage.getItem("lon")),
    Number(localStorage.getItem("lat"))
  );
}
