let userName = "";

function getReply(command) {
  const checkNameStr = "Hello my name is";
  const sayNameStr = "What is my name";

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
}

getReply("Hello my name is Thomas");
getReply("Hello my name is Thomas");

getReply("What is my name");
