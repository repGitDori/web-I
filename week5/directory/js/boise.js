const nav = document.querySelector('.navigation');
nav.addEventListener('click', ()=>
{nav.classList.toggle('shown')});

const weekdays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let weekday = weekdays[d.getDay()];
let month = months[d.getMonth()];
let day = d.getDate();
let year =d.getFullYear();
document.getElementById("day").innerHTML = "BOISE Chamber of Commerce | " + weekday + ", " + day + " " + month + " " + year;


