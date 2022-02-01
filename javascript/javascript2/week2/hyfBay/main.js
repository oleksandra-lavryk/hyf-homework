const allProducts = getAvailableProducts();
console.log(allProducts);
const productUl = document.querySelector(".products-list");

function filterProductByName(productName) {
  return allProducts.filter((item) =>
    item.name.toLowerCase().includes(productName.toLowerCase())
  );
}

function filterProductByPrice(inputPrice) {
  return allProducts.filter((item) => item.price <= inputPrice);
}

function renderProducts(filteredProducts) {
  productUl.innerHTML = "";
  filteredProducts.forEach((element) => {
    let productLi = document.createElement("li");
    productLi.innerHTML = `
      <h2>${element.name}</h2>
      <span>${element.price}</span>
      <span>${element.rating}</span>
    `;
    productUl.appendChild(productLi);
  });
}

const inputFilterName = document.querySelector(".input-name-filtering");
const inputFilterPrice = document.querySelector(".input-price-filtering");

inputFilterName.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  if (inputValue === "") {
    renderProducts(allProducts);
  } else {
    const filteredProducts = filterProductByName(inputValue);
    renderProducts(filteredProducts);
  }
});

inputFilterPrice.addEventListener("input", function (e) {
  const inputValue = e.target.value;
  if (inputValue === "") {
    renderProducts(allProducts);
  } else {
    const filteredProducts = filterProductByPrice(parseInt(inputValue));
    renderProducts(filteredProducts);
  }
});

renderProducts(allProducts);
