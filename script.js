function userDialog() {
  let userName = prompt("Please enter your name:");
  if (userName) {
    alert("Hello, " + userName + "!");
  } else {
    alert("Hello, guest!");
  }

  let userConfirmed = confirm("Do you want to proceed?");
  if (userConfirmed) {
    alert("You chose to proceed.");
  } else {
    alert("You chose to cancel.");
  }
}

// userDialog();

function developerInfo(lastName, firstName, position = "Developer") {
  alert("Developer Info:\n" + "Last Name: " + lastName + "\nFirst Name: " + firstName + "\nPosition: " + position);
}

// developerInfo("Gavrylenko", "Daiana");

function compareStrings(str1, str2) {
  if (str1.length > str2.length) {
    alert("String 1 is longer: " + str1);
  } else if (str2.length > str1.length) {
    alert("String 2 is longer: " + str2);
  } else {
    alert("Both strings are of equal length.");
  }
}

// compareStrings("Digital Agency", "Development Projects");

function changeBackgroundColor() {
  document.body.style.backgroundColor = "#ffcccb";
  setTimeout(() => {
    document.body.style.backgroundColor = "#f0f0f0";
  }, 30000);
}

// changeBackgroundColor();

function redirectToNewPage() {
  setTimeout(() => {
    location.href = "https://google.com";
  }, 3000);
}

// redirectToNewPage();

document.getElementById("special-paragraph").textContent = "This is a special paragraph updated with getElementById.";

let listItems = document.querySelectorAll("ul > li");
listItems.forEach((item, index) => {
  item.textContent = "Updated List Item " + (index + 1);
});

document.getElementById("inner-html-example").innerHTML = "<b>Inner HTML updated content</b>";
document.getElementById("outer-html-example").outerHTML =
  "<span id='outer-html-example'><b>Outer HTML updated content</b></span>";
document.getElementById("text-content-example").textContent = "Text content updated";

document.write("Hello World!");

let newDiv = document.createElement("div");
newDiv.textContent = "This is a new div created using createElement.";
document.body.append(newDiv);

let newParagraph = document.createElement("p");
let paragraphText = document.createTextNode("This is a new paragraph created using createTextNode.");
newParagraph.appendChild(paragraphText);
document.body.appendChild(newParagraph);

let anotherParagraph1 = document.createElement("p");
anotherParagraph1.textContent = "This paragraph is added using node.prepend method.";
document.body.prepend(anotherParagraph1);

let anotherParagraph2 = document.createElement("p");
anotherParagraph2.textContent = "This paragraph is added using node.append method.";
document.body.append(anotherParagraph2);

let lastParagraph = document.createElement("p");
lastParagraph.textContent = "This paragraph is added using node.after method.";
newParagraph.after(lastParagraph);

newDiv.remove();
