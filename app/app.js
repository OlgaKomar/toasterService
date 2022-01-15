const actionButtons = document.querySelectorAll(
  "#toasterActionsContainer button"
);

const infoBtnEl = document.querySelector(
  "#toasterActionsContainer button[data-value='info']"
);

console.log(actionButtons);
console.log(infoBtnEl);
const toastersContanerEl = document.querySelector("#toasterContainer");

for (let i = 0; i < actionButtons.length; i++) {
  console.log(actionButtons[i].getAttribute("data-value"));
  const toasterType = actionButtons[i].getAttribute("data-value");
  const toasterMsgEl = document.createElement("div");
  toasterMsgEl.className = "toaster";
  toasterMsgEl.classList.add(`toaster-${toasterType}`);
  const toasterTitle = capitalizeFirstLetter(toasterType);
  toasterMsgEl.innerHTML = `<h3>${toasterTitle}</h3>`;

  toastersContanerEl.appendChild(toasterMsgEl);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
