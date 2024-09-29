"use strict";

const checkEl = document.getElementById("task");
const checkContainer = document.querySelector(".task");
const inputEl = document.getElementById("input");
const taskContainerEl = document.querySelector(".task-container");
const btnAddEl = document.querySelector(".btn");
const mainEl = document.querySelector(".container");
const btnDelete = document.querySelector(".delete-btn");

const pEl = document.querySelector("p");
const myFnc = function () {
  inputEl.style.textDecoration = checkEl ? "lineThrough" : "none";
  console.log("check");
  checkEl.addEventListener("change", myFnc);
};

checkEl.addEventListener("change", () => {
  pEl.style.textDecoration = checkEl.checked ? "line-through" : "none";
  console.log(pEl.style.textDecoration);
  console.log(checkEl.checked);
});

btnAddEl.addEventListener("click", () => {
  pEl.textContent = inputEl.value;
  checkContainer.style.display = "block";
  inputEl.value = "";
});

btnDelete.addEventListener("click", () => {
  if (btnDelete) {
    checkContainer.style.display = "none";
    checkEl.checked = false;
    pEl.style.textDecoration = 'none'
  }
});
