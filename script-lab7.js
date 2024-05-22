function showAlert() {
  alert("Alert button clicked!");
}

document.getElementById("confirm-button").onclick = function () {
  confirm("Confirm button clicked!");
};

// ------------

function handleClick() {
  alert("Element clicked!");
}

function handleMouseOver() {
  document.getElementById("page-title").style.color = "red";
}

function handleMouseOver2() {
  document.getElementById("page-title").style.background = "black";
}

document.getElementById("page-title").addEventListener("click", handleClick);
document.getElementById("page-title").addEventListener("mouseover", handleMouseOver);
document.getElementById("page-title").addEventListener("mouseover", handleMouseOver2);

// --------------

let handler = {
  handleEvent(event) {
    alert("Event type: " + event.type + "\nTarget element: " + event.currentTarget.tagName);
  },
};

let element = document.getElementById("page-description");
element.addEventListener("dblclick", handler);

// -------------

setTimeout(() => {
  element.removeEventListener("dblclick", handler);
}, 10000);

// ---------

document.getElementById("services-list").onclick = function (event) {
  let target = event.target;
  if (target.tagName !== "LI") return;
  let items = document.querySelectorAll("#services-list li");
  items.forEach((item) => item.classList.remove("highlight"));
  target.classList.add("highlight");
};

// -----------

document.getElementById("menu").onclick = function (event) {
  let action = event.target.dataset.action;
  if (action) {
    window[action]();
  }
};

function showAlert() {
  alert("Alert button clicked!");
}

function showConfirm() {
  confirm("Confirm button clicked!");
}
