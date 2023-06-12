"use strict";

// window med eventlistner load og funktionsreference
window.addEventListener("load", start);
// laver en global variable med et tomt array
let users = [];
// reference funktionen som er asyn da vi har med fetch og await at gøre
async function start() {
  // sætter vores getData funktion ind i vores globale variable for at få vores data ind i arrayet
  users = await getData();
  //tjekker om vi har vores data i vores globale variabel
  console.log(users);
}

// asyn funktion der henter json filen og gemmer den i en constant som oversættes til js
async function getData() {
  const res = await fetch("users.json");
  return res.json();
}
