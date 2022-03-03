class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
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
        .then((data) => resolve(data));
    });
  }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const pc = new Product("PC", 8000);
shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(pc);
console.log(shoppingCart.getTotal());
console.log(shoppingCart.searchProduct("PC"));
shoppingCart.getUser(1).then((result) => console.log(result));
shoppingCart.renderProducts();
