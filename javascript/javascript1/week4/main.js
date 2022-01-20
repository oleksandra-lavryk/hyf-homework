let userName = "";
let toDoList = new Set();

function getReply(command) {
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

  if (command.indexOf(checkNameStr) !== -1) {
    if (userName.length == 0) {
      userName = command.slice(checkNameStr.length + 1, command.length);
      console.log("Nice to meet you, " + userName + ".");
    } else {
      console.log("I already know your name, " + userName + " :)");
    }
  }

  if (command.indexOf(sayNameStr) !== -1) {
    if (userName.length == 0) {
      console.log("I am sorry, I don`t know your name.");
    } else {
      console.log("Your name is " + userName);
    }
  }

  if (
    command.indexOf(toDoListAddStr) !== -1 &&
    command.indexOf(checkAddStr) !== -1
  ) {
    let todoItem = command;
    todoItem = todoItem
      .replaceAll(checkAddStr, "")
      .replaceAll(toDoListAddStr, "");
    toDoList.add(todoItem);
  }

  if (
    command.indexOf(toDoListRemoveStr) !== -1 &&
    command.indexOf(checkRemoveStr) !== -1
  ) {
    let todoItem = command;
    todoItem = todoItem
      .replaceAll(checkRemoveStr, "")
      .replaceAll(toDoListRemoveStr, "");

    if (toDoList.delete(todoItem)) {
      console.log(todoItem + " removed from todo list.");
    } else {
      console.log("This item was not founded in todo list.");
    }
  }

  if (command.indexOf(printToDoStr) !== -1) {
    let printedToDoList = "ToDo list: ";
    for (let item of toDoList) {
      printedToDoList = printedToDoList + item + " / ";
    }
    console.log(printedToDoList);
  }

  if (command.indexOf(checkDayStr) !== -1) {
    let todayIsDate = new Date();
    console.log(
      todayIsDate.getDate() +
        ". of " +
        months[todayIsDate.getMonth()] +
        " " +
        todayIsDate.getFullYear()
    );
  }
}

// getReply("Hello my name is Thomas");
// getReply("Hello my name is Thomas");

// getReply("What is my name");

getReply("Add fishing to my todo list");
getReply("Add reading to my todo list");
getReply("Add singing in the shower to my todo list");
getReply("Remove reading from my todo list");
getReply("What is on my todo?");
getReply("What day is it today?");
