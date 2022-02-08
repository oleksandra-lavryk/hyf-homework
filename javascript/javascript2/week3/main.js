// Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.

setTimeout(() => console.log("This string logged after 2.5 seconds."), 2500);

// Create a function that takes 2 parameters: delay and stringToLog. Calling this function should log out the stringToLog after delay seconds.
// Call the function you have created with some different arguments.

function printWithDelay(delay, strToPrint) {
  setTimeout(() => console.log(strToPrint), delay * 1000);
}

printWithDelay(4, "This string logged after 5 seconds.");
printWithDelay(1, "This string logged after 1 seconds.");

// Create a button in html. When clicking this button, use the function
// you created in the previous task to log out the text: Called after 5 seconds 5 seconds after the button is clicked.

const printBtn = document.querySelector(".print-button");
printBtn.addEventListener("click", () =>
  printWithDelay(5, "printed this text with 5s delay after button was clicked")
);

// Create two functions and assign them to two different variables.
// One function logs out Earth, the other function logs out Saturn.
// Now create a new third function that has one parameter: planetLogFunction.
// The only thing the third function should do is call the provided parameter function.

const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");

function planetLogFunction(func) {
  func();
}
planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// Create a button with the text called "Log location".
// When this button is clicked the location (latitude, longitude) of the user should be logged out using this browser api

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

// Show current location  on a map using  the Google maps api
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: currentLatitude, lng: currentLongitude },
    zoom: 12,
  });
}
// Create a function called runAfterDelay. It has two parameters: delay and callback.
// When called the function should wait delay seconds and then call the provided callback function.

function runAfterDelay(delay, callback) {
  setTimeout(callback, delay * 1000);
}
runAfterDelay(5, () => console.log("printed with delay in 5 seconds"));

// Check if we have double clicked on the page. A double click is defined by two clicks within 0.5 seconds.
// If a double click has been detected, log out the text: "double click!"

document.addEventListener("dblclick", () => console.log("double click!"));

// Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function.
// If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function that should log out a funny joke. And vice versa.

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

// Create an array with 3 items. All items should be functions. Iterate through the array and call all the functions.

const functionArray = [
  () => console.log("first array function"),
  () => setTimeout(() => console.log("second array function"), 3000),
  () => console.log("third array function"),
];

functionArray.forEach((funct) => funct());
