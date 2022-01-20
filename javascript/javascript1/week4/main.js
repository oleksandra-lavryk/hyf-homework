let commnadCounter = 0;
let userName = "";
let toDoList = [];

const checkNameStr = "Hello my name is";
const sayNameStr = "What is my name";
const toDoListAddStr = " to my todo list";
const toDoListRemoveStr = " from my todo list";
const checkAddStr = "Add ";
const checkRemoveStr = "Remove ";
const printToDoStr = "What is on my todo?";
const checkDayStr = "What day is it today?";
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const setTimerStr = "Set a timer for ";
const mathStr = "What is ";
let firstDigit;
let secondDigit;
let checkCounter = "How many commands have I written?";

function getReply(command) {
  commnadCounter = commnadCounter + 1;

  if (command.indexOf(checkNameStr) >= 0) {
    if (userName.length == 0) {
      userName = command.slice(checkNameStr.length + 1, command.length);
      console.log("Nice to meet you, " + userName + ".");
    } else {
      console.log("I already know your name, " + userName + " :)");
    }
  }

  if (command.indexOf(sayNameStr) >= 0) {
    if (userName.length == 0) {
      console.log("I am sorry, I don`t know your name.");
    } else {
      console.log("Your name is " + userName);
    }
  }

  if (
    command.indexOf(toDoListAddStr) >= 0 &&
    command.indexOf(checkAddStr) >= 0
  ) {
    let todoItem = command
      .replaceAll(checkAddStr, "")
      .replaceAll(toDoListAddStr, "");
    if (toDoList.includes(todoItem)) {
      console.log(todoItem + " is already in todo list.");
    } else {
      toDoList.push(todoItem);
      console.log(todoItem + " added to your todo list.");
    }
  }

  if (
    command.indexOf(toDoListRemoveStr) >= 0 &&
    command.indexOf(checkRemoveStr) >= 0
  ) {
    let todoItem = command
      .replaceAll(checkRemoveStr, "")
      .replaceAll(toDoListRemoveStr, "");

    if (toDoList.indexOf(todoItem) >= 0) {
      toDoList.splice(toDoList.indexOf(todoItem), 1);
      console.log(todoItem + " removed from todo list.");
    } else {
      console.log("This item was not founded in todo list.");
    }
  }

  if (command.indexOf(printToDoStr) >= 0) {
    let printedToDoList = "ToDo list: ";
    for (let item of toDoList) {
      printedToDoList = printedToDoList + item + " / ";
    }
    console.log(printedToDoList);
  }

  if (command.indexOf(checkDayStr) >= 0) {
    let todayIsDate = new Date();
    console.log(
      todayIsDate.getDate() +
        ". of " +
        months[todayIsDate.getMonth()] +
        " " +
        todayIsDate.getFullYear()
    );
  }
  if (command.indexOf(setTimerStr) >= 0) {
    let minutes = parseInt(
      command.replaceAll(setTimerStr, "").replaceAll(" minutes", "")
    );
    function timerFinished() {
      console.log("Timer done");
    }
    setTimeout(timerFinished, minutes * 60 * 1000);
    console.log("Timer set for " + minutes + " minute(s)");
  }

  if (
    command.indexOf("+") >= 0 ||
    command.indexOf("-") >= 0 ||
    command.indexOf("*") >= 0 ||
    command.indexOf("/") >= 0
  ) {
    firstDigit = command.replaceAll(mathStr, "");
    firstDigit = parseInt(firstDigit.slice(0, firstDigit.indexOf(" ")));
    secondDigit = parseInt(
      command.slice(command.lastIndexOf(" ") + 1, command.length - 1)
    );
  }
  if (command.indexOf("+") >= 0) {
    console.log("Result is: " + (firstDigit + secondDigit));
  }
  if (command.indexOf("-") >= 0) {
    console.log("Result is: " + (firstDigit - secondDigit));
  }
  if (command.indexOf("*") >= 0) {
    console.log("Result is: " + firstDigit * secondDigit);
  }
  if (command.indexOf("/") >= 0) {
    console.log("Result is: " + firstDigit / secondDigit);
  }
  if (command.indexOf(checkCounter) >= 0) {
    console.log("You wrote: " + commnadCounter + " commands.");
  }
}

getReply("Hello my name is Thomas");
getReply("Hello my name is Thomas");

getReply("What is my name");

getReply("Add fishing to my todo list");
getReply("Add fishing to my todo list");
getReply("Add reading to my todo list");
getReply("Add singing in the shower to my todo list");
getReply("Remove reading from my todo list");
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 12 + 52?");
getReply("What is 12 - 2?");
getReply("What is 12 * 10?");
getReply("What is 12 / 2?");
getReply("Set a timer for 1 minutes");
getReply("How many commands have I written?");
