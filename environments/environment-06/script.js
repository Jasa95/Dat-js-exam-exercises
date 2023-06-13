"use strict";

window.addEventListener("load", start);

let basket = []

async function start() {
    const productlist = await getData()
    showProduct(productlist)
    console.log(productlist);
    document.querySelector("#products").addEventListener("click", productBasket)
}

async function getData() {
    const res = await fetch("products.json")
    return res.json()
}

function showProduct (productlist) {
    const list = document.querySelector("#products");

    for(const product of productlist){
        const html = /*html */ `
        <article>
               <h3>${product.name}</h3>
               <p>vægt: ${product.weight} g</p>
               <p>pris: ${product.price},-</p>
               <button>Læg i kurv</button>
            </article>
        `;
        list.insertAdjacentHTML("beforeend", html)
    }
list.addEventListener("click", productBasket);} 

function productBasket(event) {
    if(event.target.classList("#productBasket")) {
        const article = event.target.closest("article");
        const name = article.querySelector("h3").textContent
        const weight = parseInt(article.querySelector("p:nth-of-type(1)"),textContent.split(":")[1]);
        const price = parseInt(article.querySelector("p:nth-of-type(2)").textContent.split(":")[1]);
        const newItem = {name, weight, price}
        basket.push(newItem)
    }


    console.log(basket);
}