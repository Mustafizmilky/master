"use strict";

//calculator project
const calulationArr = [];
const arr = [];

const clearText = document.querySelector("#del");
const inputField = document.querySelector("#input");
const zero = document.querySelector(".zero").closest(".zero__parent");

const one = document.querySelector(".one").closest(".one__parent");
const two = document.querySelector(".two").closest(".two__parent");
const three = document.querySelector(".three").closest(".three__parent");
const four = document.querySelector(".four").closest(".four__parent");
const five = document.querySelector(".five").closest(".five__parent");
const six = document.querySelector(".six").closest(".six__parent");
const seven = document.querySelector(".seven").closest(".seven__parent");
const eight = document.querySelector(".eight").closest(".eight__parent");
const nine = document.querySelector(".nine").closest(".nine__parent");

const sum = document.querySelector(".sum").closest(".sum__parent");
const minus = document.querySelector(".minus").closest(".minus__parent");
// prettierignore
const multiply = document
  .querySelector(".multiply")
  .closest(".multiply__parent");
const division = document
  .querySelector(".division")
  .closest(".division__parent");
const equal = document.querySelector(".equal").closest(".equal__parent");
const dot = document.querySelector(".dot").closest(".dot__parent");

// function to update dom with digit
const updatetheInput = function (e, value) {
  e.target.textContent = value;
  arr.push(e.target.textContent);
  const join = arr.join("");
  inputField.textContent = join;
};
// function : variable that fill up from DOM data
let valueFromDOM = "";
const updateIncrementFromDom = function (e) {
  valueFromDOM = valueFromDOM + e.target.textContent;
};

const incrementTheNumber = function (digit, number) {
  digit.addEventListener("click", function (e) {
    updatetheInput(e, number);
    updateIncrementFromDom(e);
  });
};

//remove the text from the input field
clearText.addEventListener("click", function (e) {
  inputField.textContent = "0";
  arr.length = 0;
  location.reload();
});

incrementTheNumber(zero, 0);
incrementTheNumber(one, 1);
incrementTheNumber(two, 2);
incrementTheNumber(three, 3);
incrementTheNumber(four, 4);
incrementTheNumber(five, 5);
incrementTheNumber(six, 6);
incrementTheNumber(seven, 7);
incrementTheNumber(eight, 8);
incrementTheNumber(nine, 9);
incrementTheNumber(sum, "+");
incrementTheNumber(dot, ".");
incrementTheNumber(minus, "-");
incrementTheNumber(multiply, "*");
incrementTheNumber(division, "/");

equal.addEventListener("click", function (e) {
  inputField.textContent = eval(valueFromDOM);

  valueFromDOM = "";
  arr.length = 0;
});

// calculator project finished
console.dir(document);
console.log("helo");
