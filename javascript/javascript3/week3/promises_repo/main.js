// Fetch all the 3 classmates repositories at the same time using Promise.all

function printReposOnPage(reposArr) {
  reposArr.forEach((element) => {
    if (element.items.length) {
      const repoLi = document.createElement("li");
      const repoTitle = document.createElement("h2");
      repoTitle.innerText = element.items[0].owner.login;
      repoLi.appendChild(repoTitle);
      element.items.forEach((repo) => {
        const repoSubItem = document.createElement("p");
        repoSubItem.innerHTML = `
        <span>${repo.full_name}: </span><span> ${repo.url} </span>
        `;
        repoLi.appendChild(repoSubItem);
      });
      document.querySelector(".repo-container").appendChild(repoLi);
    }
  });
}

const gitNames = ["rismita87", "sergii-borodin", "SvitlanaBurlaka"];
Promise.all([
  fetch("https://api.github.com/search/repositories?q=user:rismita87"),
  fetch("https://api.github.com/search/repositories?q=user:sergii-borodin"),
  fetch("https://api.github.com/search/repositories?q=user:SvitlanaBurlaka"),
])
  .then((responses) => {
    return Promise.all(
      responses.map((response) => {
        return response.json();
      })
    );
  })
  .then((data) => printReposOnPage(data))
  .catch((error) => console.log(error));
