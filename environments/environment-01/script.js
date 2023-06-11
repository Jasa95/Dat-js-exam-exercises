"use strict";

window.addEventListener("load", initApp);

async function initApp() {
  const users = await getData();

  showUsers(users);
}

async function getData() {
  const res = await fetch("users.json");
  return res.json();
}

function showUsers(users) {
  console.log(users);
  const list = document.querySelector("#userlist");

  const filter = users.filter((user) => user.role === "admin");

  for (const user of filter) {
    const html = /*html*/ `
    <li>name: ${user.name} - active: ${user.active}</li>
    `;
    list.insertAdjacentHTML("beforeend", html);
  }
}
