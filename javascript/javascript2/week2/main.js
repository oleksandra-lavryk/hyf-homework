// Doubling of number

const numbers = [1, 2, 3, 4];
const newNumbers = numbers
  .filter((x) => x % 2 !== 0)
  .map((filteredNumber) => filteredNumber * 2);
console.log(newNumbers);

// Create an array  containing the movies with a short title

const shortMoviesTitle = movies.filter((movie) => !movie.title.includes(" "));
console.log(shortMoviesTitle);

// Create an array of movie titles with long movie titles

const longMoviesTitles = movies
  .filter((movie) => movie.title.includes(" "))
  .map((filteredMovie) => filteredMovie.title);
console.log(longMoviesTitles);

// Count the number of movies made between 1980-1989 (including both the years)

const numberOfMoviesMadeBetweenYears = movies.reduce((movieCounter, movie) => {
  if (movie.year >= 1980 && movie.year <= 1989) {
    return (movieCounter += 1);
  }
  return movieCounter;
}, 0);

console.log(numberOfMoviesMadeBetweenYears);

// Create a new array that has an extra key called tag. The tag is based on the rating: Good (>= 7), Average (>= 4 and < 7), Bad (< 4)

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

// Using chaining, first filter the movies array to only contain the movies rated higher than 6.
// Now map the movies array to only the rating of the movies.

const ratedMovies = movies
  .filter((movie) => movie.rating > 6)
  .map((filteredMovie) => {
    return filteredMovie.rating;
  });
console.log(ratedMovies);

// Count the total number of movies containing any of following keywords: Surfer, Alien or Benjamin.

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

const moviesDuplicatedWords = movies.filter((movie) => {
  const titleArr = movie.title.toLowerCase().split(" ");
  let seenElements = [];
  let checkDuplicate;
  titleArr.forEach((element) => {
    if (seenElements.includes(element)) {
      checkDuplicate = true;
    } else {
      seenElements.push(element);
      checkDuplicate = false;
    }
  });
  return checkDuplicate;
});

console.log(moviesDuplicatedWords);

// Calculate the average rating of all the movies using reduce.

const sumRating = movies.reduce((ratingSum, movie) => {
  return (ratingSum += movie.rating);
}, 0);

let averageRating = sumRating / movies.length;
averageRating = Math.floor(averageRating * 10) / 10;
console.log(averageRating);

// Count the total number of Good, Average and Bad movies using reduce.
// A return could fx be {goodMovies: 33, averageMovies: 45, goodMovies: 123}

const countByRatingTag = tagedMovies.reduce(
  (countingObj, movie) => {
    switch (movie.tag.toLowerCase()) {
      case "good":
        countingObj.goodMovies += 1;
        break;
      case "average":
        countingObj.averageMovies += 1;
        break;
      case "bad":
        countingObj.badMovies += 1;
        break;
      default:
        return countingObj;
    }
    return countingObj;
  },
  {
    goodMovies: 0,
    averageMovies: 0,
    badMovies: 0,
  }
);
console.log(countByRatingTag);
