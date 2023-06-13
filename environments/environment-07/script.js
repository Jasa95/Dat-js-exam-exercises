"use strict";

window.addEventListener("load", start);

let studentList = [];

function start() {
    document.querySelector("#create-student-form").addEventListener("submit", createStudentClicked);
};

function createStudent(name, email, age) {
    const student = {name: name, email: email, age: age}
    studentList.push(student)
    console.log(student)
};

function createStudentClicked(event) {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const age = form.age.value;

    createStudent(name, email, age)
}

function checkEmail () {
    
}