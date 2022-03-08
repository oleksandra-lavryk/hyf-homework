class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrency(currency) {
    return new Promise((resolve, reject) => {
      fetch(
        `https://api.exchangerate.host/convert?from=DKK&to=${currency}&amount=${this.price}`
      )
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    let returnProduct = {};
    this.products.forEach((product) => {
      if (product.name.toLowerCase() === productName.toLowerCase()) {
        returnProduct = product;
      }
    });
    return returnProduct;
  }

  getTotal() {
    const total = this.products.reduce((counter, product) => {
      return (counter += product.price);
    }, 0);
    return total;
  }

  renderProducts() {
    const productsUl = document.getElementById("products-list");
    this.products.forEach((product) => {
      const productLi = document.createElement("li");
      productLi.innerHTML = `
      <strong>${product.name}</strong> <span>${product.price}</span>
      `;
      productsUl.appendChild(productLi);
    });
  }

  getUser(user) {
    return new Promise((resolve, reject) => {
      fetch(`https://jsonplaceholder.typicode.com/users/${user}`)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const pc = new Product("PC", 8000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(pc);
console.log(shoppingCart.searchProduct("PC"));

// Call the getUser function to get a user. When the user has been fetched.
// Render the products using the renderProducts method.
// Also render the username and the total price of the products in the shoppingcart.

shoppingCart.getUser(1).then((result) => {
  console.log(result);
  document.getElementById("user-container").innerHTML = `
    <h2>${result.name}</h2>
    <p>Phone - ${result.phone}</p>
    <p>Email - ${result.email}</p>
  `;
  shoppingCart.renderProducts();
  document.getElementById(
    "total"
  ).innerText = `Total: ${shoppingCart.getTotal()}`;
});

//  Depending on the provided currency return the correct price for the product.
flatscreen
  .convertToCurrency("usd")
  .then((result) =>
    console.log(`DKK: ${flatscreen.price} -> USD: ${result.result}`)
  );
flatscreen
  .convertToCurrency("uah")
  .then((result) =>
    console.log(`DKK: ${flatscreen.price} -> UAH: ${result.result}`)
  );
