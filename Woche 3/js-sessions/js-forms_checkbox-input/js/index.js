console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const successMsg = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}
hideTosError();
successMsg.setAttribute("hidden", "");

function showTosError() {
  tosError.removeAttribute("hidden");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
    return false;
  }
  // --^-- write your code here --^--

  // eslint-disable-next-line no-alert
  successMsg.removeAttribute("hidden");
  alert("Form submitted");
});

function checkTos() {
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
    return;
  }
}
