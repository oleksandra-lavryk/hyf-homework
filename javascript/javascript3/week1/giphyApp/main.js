const searchBtn = document.querySelector("button");
const wordInput = document.getElementById("search-word");
const wordAmountInput = document.getElementById("gif-amount");
const gifContainer = document.getElementById("gif-result-conatiner");
const apiKey = "dr8wkOEpX1Ws8a5AdjQdA8iBQrZumR3q";

searchBtn.addEventListener("click", () => {
  if (wordInput.value == "") {
    alert("Enter a word");
  } else {
    (async function () {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${wordInput.value}`
      );
      if (response.ok) {
        const content = await response.json();
        renderGifs(content.data);
      }
    })();
  }
});

function renderGifs(gifArr) {
  gifContainer.innerHTML = "";
  if (wordAmountInput.value > 0) {
    gifArr = gifArr.slice(0, wordAmountInput.value);
  }
  gifArr.forEach((gifItem) => {
    const gifDiv = document.createElement("div");
    const gifImg = document.createElement("img");
    gifImg.src = gifItem.images.downsized.url;
    gifDiv.appendChild(gifImg);
    gifContainer.appendChild(gifDiv);
  });
}
