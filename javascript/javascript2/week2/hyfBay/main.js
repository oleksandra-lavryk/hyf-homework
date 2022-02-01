console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);

const productUl = document.createElement("ul");
productUl.classList.add("products-list");
document.querySelector("main").appendChild(productUl);

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

    productUl.appendChild(productLi);
  }
}
renderProducts(products);
