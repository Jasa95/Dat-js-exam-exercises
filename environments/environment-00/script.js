"use strict";

window.addEventListener("load", initApp);

// ligger id for html knappen ind i en constant
const knap = document.getElementById("btn-knap");

function initApp() {
    // tilføjer click event til vores konstant som vi har vores knap id på og kalder vores btnClicked funktion
  knap.addEventListener("click", btnClicked);

  //kadlder hidetext så teksten ikke vises når siden loades på ny!
  hideText();
}


// funktionene der skal gøre noget når vi trykker på knappen
function btnClicked() {
// consolelogger i consolen når vi trykker på knappen
   console.log("Det virker!")


   //laver konstanter til hver text med deres hmtl id
   const successtext = document.getElementById("result_success");
   const failuretext = document.getElementById("result_failure")

   //tillføjer hide class og show til den rigtige når er trykkes på knappen
   failuretext.classList.add("hide");
    successtext.classList.remove("hide");
   successtext.classList.add("show");
}

// funktion der hide begge text når siden loades
function hideText() {
  //laver konstanter til hver text med deres hmtl id
  const successtext = document.getElementById("result_success");
  const failuretext = document.getElementById("result_failure");

  //tilføjer hide class til begge tekster
  failuretext.classList.add("hide");
  successtext.classList.add("hide");
}