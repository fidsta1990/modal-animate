// SELECTORS
const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal__close");
const noInterest = document.querySelector(".not-interested");
const form = document.getElementById("form");
const modalThank = document.querySelector(".modal__thankyou");
const formControl = document.querySelector(".form__control");
const note = document.getElementById("note");
// FUNCTIONS

const showModal = () => {
  modal.classList.add("modal--visible");
  document.body.removeEventListener("mouseleave", showModal);
};

const hideModal = () => {
  if (modal.classList.contains("modal--visible")) {
    modal.classList.remove("modal--visible");
    noInterest.classList.remove("modal--visible");
  }
};

const messageStyle = (color, msg) => {
  formControl.style.border = `3px solid ${color}`;
  note.style.color = `${color}`;
  note.textContent = msg;
};

const submitForm = (e) => {
  e.preventDefault();
  let target = e.target[0].value;

  if (target.includes(".com") && target.includes("@")) {
    // formControl.style.border = "3px solid green";
    messageStyle("green", "All done!");
    setTimeout(() => {
      target = "";
      note.textContent = "";
      modalThank.classList.add("show");
    }, 2000);
  } else {
    messageStyle("coral", "Invalid Email");
    setTimeout(() => {
      note.textContent = "";
    }, 4000);
  }
};

// EVENT LISTENERS

//page load event, once mouse leaves the browser window, show the modal
window.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("mouseleave", showModal);
});

//if close btn or no interested btn is clicked, close modal
closeBtn.addEventListener("click", hideModal);
noInterest.addEventListener("click", hideModal);

//if email is entered and form is submitted, slide animation to show thank you message
form.addEventListener("submit", submitForm);
