var one = document.querySelector("#one");
var two = document.querySelector("#two");
var three = document.querySelector("#three");
var four = document.querySelector("#four");
var five = document.querySelector("#five");
var six = document.querySelector("#six");
var seven = document.querySelector("#seven");
var eight = document.querySelector("#eight");
var nine = document.querySelector("#nine");
var zero = document.querySelector("#zero");
var plus = document.querySelector("#plus");
var minus = document.querySelector("#minus");
var multiply = document.querySelector("#multiply");
var divide = document.querySelector("#divide");
var hash = document.querySelector("#hash");
var fullstop = document.querySelector("#fullstop");
var clear = document.querySelector("#clear");
var mc = document.querySelector("#mc");
var backspace = document.querySelector("#backspace");
var equalto = document.querySelector("#equalto");
var update_h = document.querySelector("#update_h");
var clear_h = document.querySelector("#clear_h");

var text = document.querySelector("#text");
var hh = document.querySelector("#hh");

var equation = "";
var allHistory = "";
var his_arr = [];

one.addEventListener("click", addone);
two.addEventListener("click", addtwo);
three.addEventListener("click", addthree);
four.addEventListener("click", addfour);
five.addEventListener("click", addfive);
six.addEventListener("click", addsix);
seven.addEventListener("click", addseven);
eight.addEventListener("click", addeight);
nine.addEventListener("click", addnine);
zero.addEventListener("click", addzero);
fullstop.addEventListener("click", addfullstop);
hash.addEventListener("click", hashtag);
mc.addEventListener("click", creator);

plus.addEventListener("click", addplus);
minus.addEventListener("click", addminus);
multiply.addEventListener("click", addmultiply);
divide.addEventListener("click", adddivide);

equalto.addEventListener("click", evaluate);

clear.addEventListener("click", clearfield);
backspace.addEventListener("click", removeLastElement);
update_h.addEventListener("click", update_history);
clear_h.addEventListener("click", clear_history);

function addone() {
  equation = equation + "1";
  text.innerHTML = equation;
}
function addtwo() {
  equation = equation + "2";
  text.innerHTML = equation;
}
function addthree() {
  equation = equation + "3";
  text.innerHTML = equation;
}
function addfour() {
  equation = equation + "4";
  text.innerHTML = equation;
}
function addfive() {
  equation = equation + "5";
  text.innerHTML = equation;
}
function addsix() {
  equation = equation + "6";
  text.innerHTML = equation;
}
function addseven() {
  equation = equation + "7";
  text.innerHTML = equation;
}
function addeight() {
  equation = equation + "8";
  text.innerHTML = equation;
}
function addnine() {
  equation = equation + "9";
  text.innerHTML = equation;
}
function addzero() {
  equation = equation + "0";
  text.innerHTML = equation;
}
function addplus() {
  equation = equation + " + ";
  text.innerHTML = equation;
}
function addminus() {
  equation = equation + " - ";
  text.innerHTML = equation;
}
function adddivide() {
  equation = equation + " / ";
  text.innerHTML = equation;
}
function addmultiply() {
  equation = equation + " * ";
  text.innerHTML = equation;
}
function addfullstop() {
  equation = equation + ".";
  text.innerHTML = equation;
}
function clearfield() {
  equation = "";
  text.innerHTML = equation;
}
function removeLastElement() {
  console.log(equation.charAt(equation.length - 1));
  if (equation.charAt(equation.length - 1) === " ") {
    equation = equation.slice(0, -3);
    text.innerHTML = equation;
  } else {
    equation = equation.slice(0, -1);
    text.innerHTML = equation;
  }
}
function evaluate() {
  localStorage.setItem("equation", equation);
  var aftereval = eval(equation).toString();
  var botheqations = equation + "---------" + aftereval;
  var newequation = localStorage.getItem("equation");
  localStorage.setItem(newequation, botheqations);
  equation = eval(equation).toString();
  text.innerHTML = equation;
  console.log(newequation);
}
for (let i = 0; i < localStorage.length; i++) {
  let key = localStorage.key(i);
  let value = localStorage.getItem(key);
  if (key === "equation") {
    continue;
  }
  allHistory += value + "<br>";
}
if (allHistory === "") {
  hh.innerHTML = "0";
} else {
  hh.innerHTML = allHistory;
}
function update_history() {
  location.reload();
}
function clear_history() {
  localStorage.clear();
  location.reload();
}
function hashtag() {
  var msg1 = "#cool calculator" + ",   ";
  var msg2 = "just kidding no functionality to the hash tag yet" + ",    ";
  var msg3 = "maybe in future" + ".";
  var msg = msg1 + msg2 + msg3;
  alert(msg);
}
function creator() {
  var msg = "created by " + " Yarramuthala Suneel Kumar   ";
  alert(msg);
}
