const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

function getShortestWord(wordsArr) {
  if (wordsArr.length == 0) {
    return "Words not found!";
  }
  let shortWord = wordsArr[0];
  let shortWordLength = wordsArr[0].length;
  for (let i = 0; i < wordsArr.length; i++) {
    if (wordsArr[i].length < shortWordLength) {
      shortWord = wordsArr[i];
    }
  }
  return shortWord;
}
console.log(getShortestWord(danishWords)); // returns 'ø'

const danishLetters = ["å", "æ", "ø"];

function findDanishLetters(danishString) {
  let result = { total: 0 };
  for (let i = 0; i < danishString.length; i++) {
    if (danishLetters.includes(danishString[i].toLowerCase())) {
      result.total++;
      if (result.hasOwnProperty(danishString[i].toLowerCase())) {
        result[danishString[i].toLowerCase()] =
          result[danishString[i].toLowerCase()] + 1;
      } else {
        result[danishString[i].toLowerCase()] = 1;
      }
    }
  }
  console.log(result);
}

const danishString = "Jeg har en blå bil";
findDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grØd med røde bær";
findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}

const spiritAnimalsList = [
  "Butterfly",
  "Owl",
  "Spider",
  "Crow",
  "Hummingbird",
  "Hawk",
  "Grasshopper",
  "Eagle",
  "Bat",
  "Dolphin",
];

const generateButton = document.querySelector("button");
const nameInput = document.querySelector("input");
const generateSelect = document.getElementById("generate-settings");

const namePTag = document.querySelector(".spirit-animal-name");

function printSpiritName() {
  const randomSpiritName =
    spiritAnimalsList[Math.floor(Math.random() * spiritAnimalsList.length)];
  if (nameInput.value.length > 0) {
    namePTag.innerText = nameInput.value + " - " + randomSpiritName;
  } else {
    namePTag.innerText = "Enter name please!";
  }
}
generateButton.onclick = function (event) {
  if (generateSelect.value == "click") {
    printSpiritName();
  }
};

nameInput.onchange = function (event) {
  if (generateSelect.value == "change") {
    printSpiritName();
  }
};

nameInput.onmouseover = function (event) {
  if (generateSelect.value == "hover") {
    printSpiritName();
  }
};
