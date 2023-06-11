"use strict";

window.addEventListener("load", initApp);

// lavet en variable til et tomt array
let userArray = [];



async function initApp() {
    // smider users in i det tomme array
    await getData();
    console.log(userArray);
    showUsers();
};

// laver asynkron funktion da vi skal bruge await
async function getData() {
    // sender request til serveren og venter på svar 
    const response = await fetch("users.json");
    const users = await response.json();

    prepareUsers(users)

    function prepareUsers(users) {
    for(const key in users){
        const userobject = users[key]
        userArray.push(userobject)
    }
    };
}

function displayUsers(user) {
    
    const userHTML = /*HTML*/`
    
    <li>Navn: ${user.name}</li>
    <li>Active: ${user.active}</li>
    `;
    document.querySelector("#userlist").insertAdjacentHTML("beforeend", userHTML);
;}

function showUsers(){
    userArray.forEach(displayUsers)

    for (const user of userArray){
        if(user.role === "admin"){
            document.querySelector("#userlist").insertAdjacentHTML("beforeend", /*HTML */`
            <li><p>Navn: ${user.name} ▪︎ ${user.active}</p></li>
            `);
        }
    }
}