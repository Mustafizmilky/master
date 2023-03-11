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

const toDoBtn = document.querySelector(".todo-btn");
const newList = document.querySelector(".todo-container");

const toDoFunction = function () {
  toDoBtn.addEventListener("click", function () {
    const html = `  <div class="grid grid-cols-12 bg-slate-50 rounded-md shadow-md">
    <!-- tick mark  -->
    <div class="p-5 hidden md:block">
      <div
        class="h-4 w-4 bg-slate-200 border shadow-sm border-slate-300 rounded-sm"
      ></div>
    </div>
    <!-- to do container  -->
    <div
      class="col-start-2 col-end-13 p-2 md:p-4 text-slate-700 flex flex-col gap-8"
    >
      <!-- semi heading design  -->
      <div class="flex flex-col gap-4">
        <h3 class="text-lg font-bold md:text-left text-center ">Design sign up flow</h3>
        <p class="text-sm">
          By the time a prospect arrives at your signup page, in
          most cases, they have already evaluate Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Impedit tempora
          molestiae minus aperiam eaque tempore quam quo deleniti
          repellendus praesentium, nulla ab laborum, natus quae
          dolorum quia adipisci veniam modi.
        </p>
      </div>
      <!-- icon design  -->
      <div class="flex flex-row justify-between items-center">
        <div
          class="flex flex-row gap-1 items-center border rounded-md px-2"
        >
          <img
            src="3-11/canvas-color-svgrepo-com.svg"
            alt=""
            class="w-3 h-3"
          />
          <p class="text-xs font-semibold">Design</p>
        </div>
        <div class="flex flex-row gap-2">
          <div class="">
            <p
              class="flex flex-row gap-1 items-center rounded-lg px-3"
            >
              <img
                src="3-11/attachment-svgrepo-com.svg"
                alt=""
                class="w-3 h-3"
              /><span>1</span>
            </p>
          </div>
          <div class="">
            <p
              class="flex flex-row gap-1 items-center rounded-lg px-3"
            >
              <img
                src="3-11/comment-svgrepo-com.svg"
                alt=""
                class="w-3 h-3"
              /><span>3</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>`;
    newList.insertAdjacentHTML("afterbegin", html);
  });
};

toDoFunction();
