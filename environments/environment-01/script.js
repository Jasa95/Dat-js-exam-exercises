"use strict";

window.addEventListener("load", start);

async function start() {
    
    console.log(users);
};

async function getData() {
    const response = await fetch("users.json");
    const users = await response.json();

    return users
  
};