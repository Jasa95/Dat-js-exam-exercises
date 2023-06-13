"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
  console.log(courses);
  
  showCourse()

  document
    .querySelector("#select-filter-ects")
    .addEventListener("change", () => {
      const filterBy = document.querySelector("#select-filter-ects").value;
      filterCourse(filterBy);
    });
}

function showCourse() {
  const list = document.querySelector("#courses-list");
  list.innerHTML=""
  
  
  for (const course of courses) {
      const html = /*html*/ `
      <li>Name: ${course.name} - ectsPoints: ${course.ectsPoints}</li>
      `;
      list.insertAdjacentHTML("beforeend", html);
    }
    
}

function filterCourse() {
   
}