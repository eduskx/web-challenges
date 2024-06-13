console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  const toastMsg = document.createElement("li");
  toastMsg.innerHTML = `<li class="toast-container__message">I'm a toast message.</li>`;
  toastContainer.appendChild(toastMsg);
});

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
