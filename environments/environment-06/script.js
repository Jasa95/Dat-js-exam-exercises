"use strict";

window.addEventListener("load", start);

let basket = []

async function start() {
    const productlist = await getData()
    showProduct(productlist)
    console.log(basket);
    document.querySelector("#products").addEventListener("click", addToBasket)
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
               <button class="add-to-basket">Læg i kurv</button>
            </article>
        `;
        list.insertAdjacentHTML("beforeend", html)
    }

}

function addToBasket() {
        
}