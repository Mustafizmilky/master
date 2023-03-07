"use strict";

//calculator project
const calulationArr = [];
const calArr = [];

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
  calArr.push(e.target.textContent);
  const join = calArr.join("");
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
  calArr.length = 0;
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
  calArr.length = 0;
});

// calculator project finished

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (staterIndex, mainIndex) {
    return [this.starterMenu[staterIndex], this.mainMenu[mainIndex]];
  },
};
