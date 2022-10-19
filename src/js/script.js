"use strict"

const ctaInput = document.querySelector(".cta-input");
const ctaBtn = document.querySelector(".btn-primary-sm");
const errorMsg = document.querySelector(".error-msg");

ctaBtn.addEventListener("click", () => {
  const isValid = validateEmail(ctaInput.value);
  
  if (!isValid) {
    errorMsg.style.visibility = "visible";
  } else {
    errorMsg.style.visibility = "hidden";
  }
});

function validateEmail(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }

  return false;
}