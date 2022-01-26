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
