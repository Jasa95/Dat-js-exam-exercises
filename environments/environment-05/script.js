"use strict";

import { courses } from "./courses.js";

window.addEventListener("load", start);

function start() {
    console.log(courses);
    showCourse();
}

function showCourse() {
    const list = document.querySelector("#courses-list");

    for(const course of courses) {
        const html = /*html*/ `
        <li>Name: ${course.name} - ectsPoints: ${course.ectsPoints}</li>
        `
        list.insertAdjacentHTML("beforeend",html)
    }

}

