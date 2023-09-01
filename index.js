const textarea = document.getElementById("textarea");
const totalCounter = document.getElementById("total-counter");
const remainingCounter = document.getElementById("remaining-counter");

textarea.addEventListener("keyup", () => {
  updateCountValue();
});

updateCountValue()

function updateCountValue() {
  totalCounter.innerText = textarea.value.length;
  remainingCounter.innerText =
    textarea.getAttribute("maxLength") - textarea.value.length;
}