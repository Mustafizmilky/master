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

//

//food app
//--------------------------------------------------------------------------------------------------------
// =============================================================================================================

const mainContainer = document.querySelector(".main-container");
const btnShop = document.querySelector(".btn-shop");

let index = 4;

// display render on DOM function

const displayUI = function (array) {
  array.forEach((v, i) => {
    const lengthOfNut = Object.keys(v["nutrition"]).length;

    //put the html sting on the dom
    const html = `  <div class="bg-slate-100 rounded-xl shadow-lg ">
    <div class="w-full flex justify-center">
      <img
        src="3-13/1.jpg"
        alt=""
        class="h-1/2 opacity-50 py-2 px-1 mb-5 rounded-t-xl"
      />
    </div>
    <div class="w-full h-1 bg-slate-100 mb-5"></div>

    <div class="text-center px-2 mb-3">
      <h2 class="text-xl text-slate-700 font-semibold mb-2">
        ${v.name}
      </h2>
      <p class="text-xs mb-10">
        There are around <span class=" font-bold bg-green-100 rounded-md p-1">${lengthOfNut} ingredients  </span> of this food. Click for
        details
      </p>
    </div>
    <button
      class="px-4 py-2 bg-red-500 border border-zinc-600 text-slate-700 w-full text-xl font-extrabold details-btn" data-tab= '${v.id}'
    >
      Details Nutrition
    </button>
  </div>`;

    // insert the html on the main container
    mainContainer.insertAdjacentHTML("beforeend", html);
  });
};

//auto load 2 items in DOM during open the page

let heightofMainContainer;
const shopData = function (arr) {
  const newarr = arr.slice(0, 2);
  displayUI(newarr);

  // load more button click functions
  btnShop.addEventListener("click", function (e) {
    mainContainer.innerHTML = "";
    let slice = arr.slice(0, index);

    displayUI(slice);
    btnShop.scrollIntoView(btnShop);
    index = index + 2;
    // heightofMainContainer = mainContainer.offsetHeight;
  });
};
shopData(data);

// adding the click event on detials btn select the main container and did the bubling

const overlayEl = document.querySelector(".overlay");

const detailsBtnCtn = function (arr) {
  // adding addEventListener in the details nutraition
  mainContainer.addEventListener("click", function (e) {
    const clicked = e.target.classList.contains("details-btn");

    if (clicked) {
      const btnData = e.target.dataset.tab;

      arr.forEach((food, index) => {
        if (food.id === btnData) {
          // getting the nutrition object from main object
          const { nutrition } = arr.find((nut) => nut.id === btnData);

          //looping the main json and find the nutrition object and make the array of this keys values
          const keys = Object.keys(nutrition).reduce((a, v, i) => {
            a.push(v[0].toUpperCase() + v.slice(1));
            return a;
          }, []);
          const value = Object.values(nutrition);

          // insert the html on dom to desing the nutration container
          const html = `     <div
            class="space-y-10 shadow-md rounded-xl absolute  left-1/2 bg-blue-50 -translate-x-1/2 z-10 py-12 px-6 nutration-container text-slate-700 w-full "
          >
            <div class="bg-emerald-200">
              <h3 class="text-2xl text-slate-700 font-bold text-center">
                ${food.name} Nutritional Table
              </h3>
            </div>
  
            <div class="grid grid-cols-2 px-6 p-2 mb-10  indg-container gap-1 ">
              <p class="font-extrabold text-md mb-2">Nutrient</p>
              <p class="font-extrabold text-md mb-2">Amount per 100/g of food</p>
              
            </div>
            <div class="text-center">
              <button
                class="bg-green-300 font-bold text-md px-10 py-2 rounded-md text-slate-700 nutrient-close"
              >
                close
              </button>
            </div>
          </div>`;

          mainContainer.insertAdjacentHTML("beforeend", html);

          //adding the ingrideint in the DOM by looping the ingrident object
          const indgContainerEl = document.querySelector(".indg-container");

          keys.forEach((ing, index) => {
            const ingHtml = `<p class="text-xs bg-red-200 font-bold mb-2 p-1">${ing}</p>
            <p class="text-xs bg-red-200 mb-2 p-1 font-bold">${value[index]}</p>`;

            indgContainerEl.insertAdjacentHTML("beforeend", ingHtml);
          });

          mainContainer.scrollIntoView(mainContainer);

          //below are the things happend once click the details Nutrition button

          // overlayEl.style.height = `${heightofMainContainer}px`;
          // console.log(heightofMainContainer);
          overlayEl.classList.remove("hidden");
          btnShop.classList.add("hidden");

          //adding the close function of ingrident details box
          const nutrationContainerEL = document.querySelector(
            ".nutration-container"
          );
          const nutrientCloseEL = document.querySelector(".nutrient-close");
          nutrientCloseEL.addEventListener("click", function (e) {
            nutrationContainerEL.remove();
            btnShop.scrollIntoView(btnShop);
            overlayEl.classList.add("hidden");
            btnShop.classList.remove("hidden");
          });
        }
      });
    }
  });
};

detailsBtnCtn(data);
