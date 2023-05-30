"use strict";

window.addEventListener("load", start);

async function start() {
    const users = await getData();
    console.log(users)
};

async function getData() {
    const response = await fetch("users.json");
    const data = await response.json();
    
    return data;

};