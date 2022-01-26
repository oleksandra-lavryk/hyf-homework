console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const priductUl = document.createElement("ul");
priductUl.classList.add("products-list");
document.querySelector("main").appendChild(priductUl);

function renderProducts(products) {
  for (let i = 0; i < products.length; i++) {
    let productLi = document.createElement("li");
    productLi.innerHTML =
      "<h2>" +
      products[i].name +
      "</h2><span> price: " +
      products[i].price +
      "</span><span> rating: " +
      products[i].rating +
      "</span>";

    priductUl.appendChild(productLi);
  }
}
renderProducts(products);
