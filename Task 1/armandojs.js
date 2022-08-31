/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

let kg = 1;
const lb = kg * 2.2046;
const g = kg / 0.001;
const oz = kg * 35.274;

document.querySelector("#submit-btn").addEventListener("click", function () {
  console.log(kg);
  const userInput = document.querySelector(".searchjs").value;
  document.querySelector(".resultlb").textContent = userInput;
});
