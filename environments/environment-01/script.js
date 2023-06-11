"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const users = await getData();
  console.log(users);
  showUsers(users);
  count(users);
}

async function getData() {
  const res = await fetch("users.json");
  return res.json();
}

function showUsers(users) {
  const list = document.querySelector("#userlist");

  for (const user of users) {
    const html = /*html*/ `
    <li>Name: ${user.name} - Role: ${user.role}</li>
    `;
    list.insertAdjacentHTML("beforeend", html);
  }
}

function count(users) {
  const adminCount = document.querySelector("#admin-count");
  const userCount = document.querySelector("#user-count");
  const guestCount = document.querySelector("#guest-count");

  let acounter = users.filter((user) => user.role === "admin");
  console.log(acounter);
  let ucounter = users.filter((user) => user.role === "user");
  console.log(ucounter);
  let gcounter = users.filter((user) => user.role === "guest");
  console.log(gcounter);

  // for (const user of users) {
  //   if (user.role === "admin") {
  //     acounter++;
  //   } else if(user.role === "user"){
  //     ucounter++
  //   } else {
  //     gcounter++
  //   }
  // }
  adminCount.textContent = acounter.length;
  userCount.textContent = ucounter.length;
  guestCount.textContent = gcounter.length;
}
