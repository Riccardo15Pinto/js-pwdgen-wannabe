// check script.js
console.log("JS ok")
// check element DOM
console.log(document.getElementById("user-password"));
// add prompt firstnameuser
const firstnameuser = prompt("Come ti chiami?" , "Riccardo");
// check name-user
console.log(firstnameuser);
// add prompt secondnameuser
const secondnameuser = prompt("Qual'è il tuo cognome?" , "Pinto");
// check second-name-user
console.log(secondnameuser);
// add prompt fav-color-user
const favcoloruser = prompt("Qual'è il tuo colore preferito?" , "Blu");
// check fav-color-user
console.log(favcoloruser);
/*
add element
firstnameuser,secondnameuser and favcoloruser
in element DOM
*/
document.getElementById("user-password").innerHTML = "La tua password è:" + firstnameuser + secondnameuser + favcoloruser +"21";