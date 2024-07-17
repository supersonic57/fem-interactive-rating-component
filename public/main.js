"use strict";
let rating = "";
const section1 = document.querySelector(".how-did-we-do");
const section2 = document.querySelector(".thank-you");
const ratingSpan = document.querySelector("#rating-span");
const buttonsDiv = document.querySelector(".buttons");
const buttons = buttonsDiv.children;
const btnSubmit = document.querySelector(".btn-submit");
const selectButton = (btn) => {
    rating = btn.value;
    btn.classList.add("selected");
};
const unselectAllButtons = (buttons) => {
    for (let i = 0; i < buttons.length; i++) {
        const btn = buttons[i];
        btn.classList.remove("selected");
    }
};
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", () => {
        unselectAllButtons(buttons);
        selectButton(btn);
    });
}
btnSubmit.addEventListener("click", () => {
    if (rating === "") {
        alert("ERROR: Please select a rating before submitting the form.");
        return;
    }
    section1.classList.add("hide");
    section2.classList.remove("hide");
    ratingSpan.innerText = rating;
});
