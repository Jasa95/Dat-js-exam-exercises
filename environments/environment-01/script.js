"use strict";

window.addEventListener("load", initApp);

let userArray = [];

async function initApp() {
    console.log("JS er i gang!");
    await getData();
    console.log(userArray)

    userArray.forEach(function (user) {
      showUsers(user);
    });

    countUsers();
  
}

async function getData() {
  const response = await fetch("users.json");
  const data = await response.json();
  
  // for(const key in data){
  //   userArray.push(data[key]);
  // }
};

function countUsers() {
  let role = 0

  for(let key in userArray) {
    ++role
  };
  console.log(role)
};

function showUsers(user){
  let userHTML =
  /*HTML*/
  `
  <li>Navn: ${user.name}</li>
  <li>Aktiv: ${user.active}</li>
  <li>Type: ${user.role}</li>
  <br>
  `;
  document
  .querySelector("#userlist")
  .insertAdjacentHTML("beforeend", userHTML);
}
