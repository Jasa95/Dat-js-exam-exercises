"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log(courses);
  createCourse();
  showCourse();
}

function showCourse() {
  const list = document.querySelector("#courses-list");
  list.innerHTML = "";

  for (const course of courses) {
    const html = /*html*/ `
        <li>Name: ${course.name}</li>
        <li>EctsPoints: ${course.ectsPoints}</li>
        <li>Teacher: ${course.teacher}</li>
        `;
    list.insertAdjacentHTML("beforeend", html);
  }
}

function createCourse() {
  const newCourse = {
    name: "Introduction to Science",
    startDate: "2023-02-01",
    endDate: "2024-12-31",
    ectsPoints: 30,
    maxStudents: 20,
    teacher: "Peter Petersen",
  };

  courses.push(newCourse);
}
