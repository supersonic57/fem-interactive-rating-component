let rating: string = "";

const section1 = document.querySelector(".how-did-we-do") as HTMLDivElement;
const section2 = document.querySelector(".thank-you") as HTMLDivElement;

const ratingSpan = document.querySelector("#rating-span") as HTMLSpanElement;

const buttonsDiv = document.querySelector(".buttons") as HTMLDivElement;
const buttons = buttonsDiv.children as HTMLCollection;

const btnSubmit = document.querySelector(".btn-submit") as HTMLButtonElement;

const selectButton = (btn: HTMLInputElement) => {
  rating = btn.value;
  btn.classList.add("selected");
};

const unselectAllButtons = (buttons: HTMLCollection) => {
  for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i] as HTMLInputElement;
    btn.classList.remove("selected");
  }
};

for (let i = 0; i < buttons.length; i++) {
  const btn = buttons[i] as HTMLInputElement;
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
