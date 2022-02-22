// Movies exercise
// Create an array of bad movies
// Creat an array of bad movies since year 2000
const badMovies = [];
const badMoviesSinse = [];
fetch(
  "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((movie) => {
      if (movie.rating < 7) {
        badMovies.push(movie);
        if (movie.year >= 2000) {
          badMoviesSinse.push(movie);
        }
      }
    });
  })
  .then(() => {
    console.log(badMovies);
    console.log(badMoviesSinse);
  });

// Promise that resolves after set time
function executeInSomeTime(resolveAfter) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

executeInSomeTime(5).then(() => {
  console.log("I am called asynchronously"); // logged out after 8 seconds
});

(async function () {
  await executeInSomeTime(2);
  console.log("I am called asynchronously with async");
})();

// Rewrite time

function setTimeoutPromise(timeInSeconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, timeInSeconds);
  });
}
setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (currentPosition) => {
        resolve({
          latitude: currentPosition.coords.latitude,
          longitude: currentPosition.coords.longitude,
        });
      },
      (error) => reject(error.message)
    );
  });
}
getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

// The 3 steps:
// 1.Wait 3 seconds
// 2.After 3 seconds fetch some data from any api you like
// 3.Log out the data from the api

// Fetching and waiting 3 steps with .then
setTimeoutPromise(3000)
  .then(() => fetch("https://random.dog/woof.json"))
  .then((response) => response.json())
  .then((data) => console.log(data));

// Fetching and waiting 3 steps with  async/await
(async function () {
  await setTimeoutPromise(8000);
  const response = await fetch("https://random.dog/woof.json");
  const content = await response.json();
  console.log(content);
})();
