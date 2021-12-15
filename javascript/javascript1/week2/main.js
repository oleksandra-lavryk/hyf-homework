// Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender) {
  if (useFormalName) {
    switch (gender) {
      case "male":
        return "Lord " + firstname + " " + surname;
        break;
      case "female":
        return "Lady " + firstname + " " + surname;
        break;
      default:
        return firstname + " " + surname;
    }
  }
  return firstname + " " + surname;
}

const fullname1 = getFullname("Benjamin", "Hughes", true, "male");
const fullname2 = getFullname("Line", "Hansen", true, "female");

console.log(fullname1 + "\n" + fullname2);

// Event application
const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getEventWeekday(daysToEvent) {
  const todayFullDate = new Date();
  const meetingDate = new Date(
    todayFullDate.getFullYear(),
    todayFullDate.getMonth(),
    todayFullDate.getDate() + daysToEvent
  );
  return weekDays[meetingDate.getDay()];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(2));

// Weather wear
function getClothToWear(temperature) {
  if (temperature < 0) {
    return "warm jacket, hat and pants";
  } else if (temperature < 10) {
    return "coat and pants";
  } else if (temperature < 15) {
    return "sweatshirt and jeans";
  } else if (temperature < 20) {
    return "t-shirt and jeans";
  } else {
    return "shorts and t-shirt";
  }
}

const clothesToWear = getClothToWear(20);
console.log(clothesToWear);
