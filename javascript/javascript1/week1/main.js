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

// Housey pricey (A house price estimator)
let names = ["Peter", "Julia"];
let houseWide = [8, 5];
let houseHight = [10, 8];
let houseDepth = [10, 11];
let gardenSize = [100, 70];
let housePrice = [2500000, 1000000];
let actualHousePrice;

for (let i = 0; i < names.length; i++) {
  actualHousePrice =
    houseWide[i] * houseHight[i] * houseDepth[i] * 2.5 * 1000 +
    gardenSize[i] * 300;
  if (actualHousePrice < housePrice[i]) {
    console.log(
      "Hey " + names[i] + ", sorry but You are paing too much for this house."
    );
  } else {
    console.log("Hey " + names[i] + ", the price for the house is OK.");
  }
}
