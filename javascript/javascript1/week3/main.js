// Item array removal
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToRemove) {
    names.splice(i, 1);
    i--;
  }
}
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

// When will we be there??
function getTravelTime(travelInfo) {
  let travelTimeResult = travelInfo.destinationDistance / travelInfo.speed;
  let travelTimeResultInMinutes =
    travelTimeResult - Math.trunc(travelTimeResult);
  return (
    Math.trunc(travelTimeResult) +
    " hours " +
    Math.trunc(travelTimeResultInMinutes * 60) +
    " minutes"
  );
}
const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};

const travelTime = getTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

// Series duration of my life
const seriesDurations = [
  {
    title: "Game of thrones",
    days: 3,
    hours: 1,
    minutes: 0,
  },
  {
    title: "Sopranos",
    days: 3,
    hours: 14,
    minutes: 0,
  },
  {
    title: "The Wire",
    days: 2,
    hours: 12,
    minutes: 0,
  },
  {
    title: "Bones",
    days: 7,
    hours: 3,
    minutes: 0,
  },
];
const lifeDuration = 80 * 365 * 24 * 60;
let totalPersent = 0;
function logOutSeriesText() {
  for (let i = 0; i < seriesDurations.length; i++) {
    let perscent = Number(
      (
        ((seriesDurations[i].days * 24 * 60 +
          seriesDurations[i].hours * 60 +
          seriesDurations[i].minutes) /
          lifeDuration) *
        100
      ).toFixed(3)
    );

    console.log(
      seriesDurations[i].title + " tooks " + perscent + "% of my life"
    );
    totalPersent += perscent;
  }
}
logOutSeriesText();
console.log("In total that is " + totalPersent + "% of my life");
