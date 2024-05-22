const servicesList = document.getElementById("services-list");

servicesList.addEventListener("mouseover", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.backgroundColor = "lightgreen";
    console.log("Mouse over on: ", event.target);
  }
});

servicesList.addEventListener("mouseout", (event) => {
  if (event.target.tagName === "LI") {
    event.target.style.backgroundColor = "";
    console.log("Mouse out from: ", event.target);
    console.log("Mouse now over: ", event.relatedTarget);
  }
});

// ------------------

let draggable = document.getElementById("draggable");
let isDragging = false;

draggable.addEventListener("mousedown", (event) => {
  isDragging = true;
  event.target.style.position = "absolute";
  event.target.style.zIndex = 1000;
});

document.addEventListener("mousemove", (event) => {
  if (isDragging) {
    draggable.style.left = event.pageX - draggable.offsetWidth / 2 + "px";
    draggable.style.top = event.pageY - draggable.offsetHeight / 2 + "px";
  }
});

document.addEventListener("mouseup", (event) => {
  if (isDragging) {
    isDragging = false;
  }
});
