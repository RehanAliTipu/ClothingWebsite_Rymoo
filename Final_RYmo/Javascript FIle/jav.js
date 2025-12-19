//! Code that fetch data from Json and automatically replace that text

fetch("product.json")
  .then((response) => response.json())
  .then((products) => {
    let productcard = document.querySelectorAll(".product");
    productcard.forEach((card) => {
      let key = card.dataset.key;
      let prop = products[key];
      if (prop) {
        card.querySelector(".p-name").textContent = prop.title;
        card.querySelector(".p-price").textContent = prop.price;

        let btn = card.querySelector(".buy-btn");
        btn.onclick = () => {
          window.location.href = `sproduct.html?id=${key}`;
        };
      }
    });
  })
  .catch((error) => console.error("Error loading Product.json", error));
