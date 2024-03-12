let jsHeight = document.querySelector(".js-Height");
let jsWeight = document.querySelector(".js-Weight");
let jsForm = document.querySelector(".js-Form");
let jsBmi = document.querySelector(".js-Bmi");

jsForm.addEventListener
("submit", (event) => {
    event.preventDefault();

let height = jsHeight.value;
let weight = jsWeight.value;

let Bmi = weight / ((height/100   )**2);

jsBmi.innerText = Bmi.toFixed(2);
console.log (height, weight, Bmi);


} ) ;