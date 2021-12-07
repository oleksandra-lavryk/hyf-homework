// Age-ify (A future age calculator)
let yearOfBirth = 1996;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture + ".");

// Goodboy-Oldboy (A dog age calculator)
let dogYearOfBirth = 2018;
let dogYearFuture = 2027;
let dogYear;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear = (dogYearFuture - dogYearOfBirth) * 7;
  console.log(
    "Your dog will be " + dogYear + " human years old in " + dogYearFuture + "."
  );
} else {
  dogYear = dogYearFuture - dogYearOfBirth;
  console.log(
    "Your dog will be " + dogYear + " years old in " + dogYearFuture + "."
  );
}
