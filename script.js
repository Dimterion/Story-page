// Importing data from the file with the array.
import { mainText } from "./text.js";

// Accessing HTML elements.
const chapters = document.getElementsByClassName("chapters");
const heading = document.getElementById("heading");
const txtContent = document.getElementById("text-content");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Starting point to count story pages.
let i = -1;

// Function to count pages backward and put content to the page according to the array index.
function backward() {
  i--;
  heading.innerHTML = mainText[i].chapter;
  txtContent.innerHTML = mainText[i].contents;
}

// Function to count pages forward and put content to the page according to the array index.
function forward() {  
  i++;
  heading.innerHTML = mainText[i].chapter;
  txtContent.innerHTML = mainText[i].contents;
};

// Click-event for the Previous button.
prevBtn.addEventListener("click", () => {
  if (i > 0) {
  backward();
  } else {
    alert("There's no going back. Move forward my friend.");
  }
});

// Click-event for the Next button.
nextBtn.addEventListener("click", () => {
  if (i < mainText.length - 1) {
  forward();
  } else {
    alert("You've reached the end of the story. Imagine that you've just earned an achievement and my gratitude.");
  }
});

// Storing all chapters from the dropdown menu in the array
let chaptersArray = [];

// Pushing each chapter to the array and creating an event listener for each chapter to navigate to the appropriate section
for (let chapter of chapters) {
  chaptersArray.push(chapter);
  chapter.addEventListener("click", () => {
    i = chaptersArray.indexOf(chapter);
    heading.innerHTML = mainText[i].chapter;
    txtContent.innerHTML = mainText[i].contents;
  });
};