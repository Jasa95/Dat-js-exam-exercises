"use strict";
import { teachers } from "./teachers.js";

window.addEventListener("load", start);

function start() {
  showTeachers();
  createTeacher("lars", "larsdsgs");
}

function showTeachers() {
  const list = document.querySelector("#teachers-list");
  list.innerHTML = "";

  for (const teacher of teachers) {
    const html = /*html*/ `
        <li>Name: ${teacher.name} - ${teacher.email}</li>
        `;
    list.insertAdjacentHTML("beforeend", html);
  }
}

function createTeacher(name, email) {
  const newTeacher = { name, email };

  teachers.push(newTeacher);
  showTeachers();
}
