const allProducts = getAvailableProducts();

const productUl = document.querySelector(".products-list");
const sortCheckBox = document.getElementById("sort-products");

function filterProductByName(productName) {
  return allProducts.filter((item) =>
    item.name.toLowerCase().includes(productName.toLowerCase())
  );
}
function filterProductByPrice(inputPrice) {
  return allProducts.filter((item) => item.price <= inputPrice);
}

function sortProductListByRating(products) {
  function sortArray(item1, item2) {
    if (item1.rating < item2.rating) {
      return -1;
    }
    if (item1.rating > item2.rating) {
      return 1;
    }
    return 0;
  }
  return products.sort(sortArray);
}
function renderProduct(product) {
  let productLi = document.createElement("li");
  productLi.classList.add("products-list-item");
  productLi.innerHTML = `
      <h2>${product.name}</h2>
      <div>
        <span>Price: </span>
        <span>${product.price}</span>
      </div>
      <div>
        <span>Rating: </span>
        <span> ${product.rating}</span>
      </div>
      
    `;
  productUl.appendChild(productLi);
}

function renderProducts(filteredProducts) {
  productUl.innerHTML = "";
  if (sortCheckBox.checked) {
    sortProductListByRating(filteredProducts).forEach((element) =>
      renderProduct(element)
    );
  } else {
    filteredProducts.forEach((element) => renderProduct(element));
  }
}

const inputFilterName = document.querySelector(".input-name-filtering");
const inputFilterPrice = document.querySelector(".input-price-filtering");

inputFilterName.addEventListener("input", function (e) {
  inputFilterPrice.value = "";
  const inputValue = e.target.value;
  if (inputValue === "") {
    renderProducts(allProducts);
  } else {
    const filteredProducts = filterProductByName(inputValue);
    renderProducts(filteredProducts);
  }
});

inputFilterPrice.addEventListener("input", function (e) {
  inputFilterName.value = "";
  const inputValue = e.target.value;
  if (inputValue === "" || isNaN(e.target.value)) {
    renderProducts(allProducts);
  } else {
    const filteredProducts = filterProductByPrice(parseInt(inputValue));
    renderProducts(filteredProducts);
  }
});

const changeColorBtn = document.querySelector(".change-color-button");

changeColorBtn.addEventListener("click", function (e) {
  const productItemList = document.querySelectorAll(".products-list-item");
  if (
    productItemList.length > 0 &&
    productItemList[0].classList.contains("products-list-item--colored")
  ) {
    productItemList.forEach((element) =>
      element.classList.remove("products-list-item--colored")
    );
  } else {
    productItemList.forEach((element) =>
      element.classList.add("products-list-item--colored")
    );
  }
});

renderProducts(allProducts);
