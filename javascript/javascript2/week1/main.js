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
    if (danishLetters.includes(danishString[i])) {
      result.total++;
      if (result.hasOwnProperty(danishString[i])) {
        result[danishString[i]] = result[danishString[i]] + 1;
      } else {
        result[danishString[i]] = 1;
      }
    }
  }
  console.log(result);
}

const danishString = "Jeg har en blå bil";
findDanishLetters(danishString); // returns {total: 1, å: 1}

const danishString2 = "Blå grød med røde bær";
findDanishLetters(danishString2); // returns {total: 4, æ: 1, ø: 2, å: 1}
