"use strict";
import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log(courses);
  sortCourse();
}

function showCourse() {
  const list = document.querySelector("#courses-list");
  list.innerHTML = "";

  for (const course of courses) {
    const html = /*html */ `
        <li>Name: ${course.name} - startDate: ${course.startDate} - ectsPoints: ${course.ectsPoints}</li>
        `;
    list.insertAdjacentHTML("beforeend", html);
  }
}

function sortCourse() {
  courses.sort((a, b) => a.startDate.localeCompare(b.startDate));
  showCourse();
}
