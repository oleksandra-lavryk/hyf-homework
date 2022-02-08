// setTimeout(() => console.log("This string logged after 2.5 seconds."), 2500);

// function printWithDelay(delay, strToPrint) {
//   setTimeout(() => console.log(strToPrint), delay * 1000);
// }

// printWithDelay(4, "This string logged after 5 seconds.");
// printWithDelay(1, "This string logged after 1 seconds.");

// const printBtn = document.querySelector(".print-button");
// printBtn.addEventListener("click", () =>
//   printWithDelay(5, "printed this text with 5s delay after button was clicked")
// );

const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

function planetLogFunction(func) {
  func();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);
let currentLatitude;
let currentLongitude;
function logLocation() {
  navigator.geolocation.getCurrentPosition(
    (currentPosition) => {
      console.log(
        "latitude: " +
          currentPosition.coords.latitude +
          " longitude: " +
          currentPosition.coords.longitude
      );
      currentLatitude = currentPosition.coords.latitude;
      currentLongitude = currentPosition.coords.longitude;
      initMap();
    },
    (error) => console.log(error.message)
  );
}
const locationBtn = document.querySelector(".location-button");
locationBtn.addEventListener("click", logLocation);

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: currentLatitude, lng: currentLongitude },
    zoom: 12,
  });
}

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(5, () => console.log("printed with delay in 5 seconds"));

document.addEventListener("dblclick", () => console.log("double click!"));

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFunnyJoke) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

jokeCreator(
  true,
  () => console.log("Funny joke is here:)"),
  () => console.log("Bad joke is here :(")
);
jokeCreator(
  false,
  () => console.log("Funny joke is here:)"),
  () => console.log("Bad joke is here :(")
);
