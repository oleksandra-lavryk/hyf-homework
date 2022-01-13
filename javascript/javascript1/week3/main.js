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
