"use strict";

window.addEventListener("load", start);

let products = [
  { name: "hat", price: 234, inStock: true },
  { name: "jakke", price: 3400, inStock: true },
  { name: "sko", price: 345, inStock: false },
];

function start() {
  document.querySelector("#select-sort-by").addEventListener("change", () => {
    const sortBy = document.querySelector("#select-sort-by").value;
    sortProduct(sortBy);
  });
  showProduct();
}

function showProduct() {
  const list = document.querySelector("#list-container");

  list.innerHTML=""
  for (const product of products) {
    const html = /*html*/ `
  <article>
  <p>Name: ${product.name}</p>
  <p>Price: ${product.price}</p>
  <p>inStock: ${product.inStock}</p></article>
  `;
    list.insertAdjacentHTML("beforeend", html);
  }
}

function sortProduct(sortBy) {
  if(sortBy === "name"){
  products.sort((a,b)=>a[sortBy].localeCompare(b[sortBy]))
} else products.sort((a,b)=>a[sortBy] - b[sortBy])
showProduct();
}
