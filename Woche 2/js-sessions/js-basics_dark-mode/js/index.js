console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector("[data-js=dark-mode-button]");
const lightButton = document.querySelector("[data-js=light-mode-button]");
const toggleButton = document.querySelector("[data-js=toggle-button]");

darkButton.addEventListener("click", () => {
  document.querySelector("body").classList.add("dark");
});

lightButton.addEventListener("click", () => {
  document.querySelector("body").classList.remove("dark");
});

toggleButton.addEventListener("click", () => {
  document.querySelector("body").classList.toggle("dark");
});
