// Flight booking fullname function

function getFullname(firstname, surname, useFormalName, gender) {
  if (firstname == "" || surname == "") {
    console.log("Please give firstname and surname!");
    return;
  }
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
const fullname3 = getFullname("", "");

console.log(fullname1 + "\n" + fullname2 + "\n" + fullname3);

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

// Student manager
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName == "") {
    console.log("Cannot add without name.");
  } else if (class07Students.includes(studentName)) {
    console.log("Student " + studentName + " is already in the class.");
  } else if (studentName == "Queen") {
    class07Students.push(studentName);
  } else if (class07Students.length > 6) {
    console.log("Cannot add more students to class 07");
  } else {
    class07Students.push(studentName);
  }
}

function getNumberOfStudents() {
  return class07Students.length;
}
addStudentToClass("");
addStudentToClass("Sasha");
addStudentToClass("Pasha");
addStudentToClass("Vera");
addStudentToClass("Sara");
addStudentToClass("Line");
addStudentToClass("Ben");
addStudentToClass("Pasha");
addStudentToClass("Queen");
console.log(getNumberOfStudents());

// Candy helper
const amountToSpend = parseInt(Math.random() * 100);
let boughtCandyPrices = [];

function canBuyMoreCandy() {
  let totalprice = 0;
  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalprice += boughtCandyPrices[i];
  }
  if (totalprice < amountToSpend) {
    return true;
  } else {
    return false;
  }
}
function addCandy(candyType, weight) {
  if (canBuyMoreCandy()) {
    switch (candyType) {
      case "sweet":
        boughtCandyPrices.push(weight * 0.5);
        break;
      case "chocolate":
        boughtCandyPrices.push(weight * 0.7);
        break;
      case "toffee":
        boughtCandyPrices.push(weight * 1.1);
        break;
      case "chewing-gum":
        boughtCandyPrices.push(weight * 0.03);
        break;
      default:
        console.log("Unknown type of candy.");
    }
    if (canBuyMoreCandy()) {
      console.log("You can buy more, so please do!");
    }
  } else {
    console.log("No money.Enough candy for you!");
  }
}

addCandy("sweet", 20);
addCandy("toffee", 10);
addCandy("chewing-gum", 50);
console.log(boughtCandyPrices);
