// Doubling of number

const numbers = [1, 2, 3, 4];
const newNumbers = numbers
  .filter((x) => x % 2 !== 0)
  .map((filteredNumber) => filteredNumber * 2);
console.log(newNumbers);

// Working with movies
const shortMoviesTitle = movies.filter((movie) => !movie.title.includes(" "));
console.log(shortMoviesTitle);

const longMoviesTitle = movies.filter((movie) => movie.title.includes(" "));
console.log(longMoviesTitle);

const numberOfMoviesMadeBetweenYears = movies.reduce((movieCounter, movie) => {
  if (movie.year >= 1980 && movie.year <= 1989) {
    return (movieCounter += 1);
  }
  return movieCounter;
}, 0);

console.log(numberOfMoviesMadeBetweenYears);

const tagedMovies = movies.map((movie) => {
  if (movie.rating >= 7) {
    movie.tag = "Good";
    return movie;
  } else if (movie.rating >= 4) {
    movie.tag = "Average";
    return movie;
  } else {
    movie.tag = "Bad";
    return movie;
  }
});
console.log(tagedMovies);

// 6. Now map the movies array to only the rating of the movies???
const ratedMovies = movies
  .filter((movie) => movie.rating > 6)
  .map((filteredMovie) => {
    return filteredMovie.rating;
  });
console.log(ratedMovies);

const numberMoviesContainsWords = movies.reduce((movieCounter, movie) => {
  if (
    movie.title.toLowerCase().includes("surfer") ||
    movie.title.toLowerCase().includes("alien") ||
    movie.title.toLowerCase().includes("benjamin")
  ) {
    return (movieCounter += 1);
  }
  return movieCounter;
}, 0);

console.log(numberMoviesContainsWords);

// Create an array of movies where a word in the title is duplicated.
// Fx "Star Wars: The Clone Wars" the word Wars is duplicated.
// Here are some madeup examples of movies with duplicated words in the title: "The three men and the pistol",
// "Chase three - The final chase"

const str = "Big black bug bit a big black dog on his big black nose";
const strArr = str.toLowerCase().split(" ");
console.log(strArr);

// const sumRating = movies.reduce((ratingSum, movie) => {
//   return (ratingSum += movie.rating);
// }, 0);
// let averageRating = sumRating / movies.length;
// averageRating = Math.floor(averageRating * 10) / 10;
// console.log(averageRating);

// const countByRatingTag = tagedMovies.reduce(
//   (countingObj, movie) => {
//     switch (movie.tag.toLowerCase()) {
//       case "good":
//         countingObj.goodMovies += 1;
//         break;
//       case "average":
//         countingObj.averageMovies += 1;
//         break;
//       case "bad":
//         countingObj.badMovies += 1;
//         break;
//       default:
//         return countingObj;
//     }
//     return countingObj;
//   },
//   {
//     goodMovies: 0,
//     averageMovies: 0,
//     badMovies: 0,
//   }
// );
// console.log(countByRatingTag);
