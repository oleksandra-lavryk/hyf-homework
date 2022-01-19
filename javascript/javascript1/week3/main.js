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

// Smart-ease - Back to the basics!
let notes = [];
function saveNote(content, id) {
  notes.push({ content: content, id: id });
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
console.log(notes);

function getNote(id) {
  let checkFoundedNote = -1;
  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id == id) {
      checkFoundedNote = i;
    }
  }
  if (checkFoundedNote == -1) {
    return false;
  } else {
    return notes[checkFoundedNote];
  }
}

const firstNote = getNote(2);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(
      "The note with id: " +
        notes[i].id +
        ", has the following note text: " +
        notes[i].content
    );
  }
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

function checkIfEmptyNote(note) {
  if (note.content === "") {
    return true;
  }
  return false;
}
if (checkIfEmptyNote(notes[1])) {
  console.log("Note is empty");
} else {
  console.log("Note is not empty");
}

// CactusIO-interactive
let activities = [];

function addActivity(date, activity, duration) {
  activities.push({ date: date, activity: activity, duration: duration });
}
addActivity("23/7-18", "Youtube", 30);
addActivity("25/7-18", "Youtube", 120);
console.log(activities);
const usageLimit = 150;
function showStatus() {
  if (activities.length === 0) {
    return "Add some activities before calling showStatus";
  } else {
    let activitiesAmount = 0;
    for (let i = 0; i < activities.length; i++) {
      activitiesAmount += activities[i].duration;
    }
    if (activitiesAmount >= usageLimit) {
      return "You have reached your limit, no more smartphoning for you!";
    } else {
      return (
        "You have added " +
        activities.length +
        " activities. They amount to " +
        activitiesAmount +
        " min. of usage."
      );
    }
  }
}
console.log(showStatus());
