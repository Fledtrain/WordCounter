const inputTextArea = document.getElementById("input-textarea");
const charCount = document.getElementById("char-count");
const wordCount = document.getElementById("word-count");

//Add a function that deletes all the text in the textarea when the clear button is clicked
document.getElementById("btn-clear").addEventListener("click", () => {
  inputTextArea.value = "";
});

//Deletes the local storage when the clear button is clicked and resets the character and word count to 0
document.getElementById("btn-clear").addEventListener("click", () => {
  charCount.textContent = 0;
  wordCount.textContent = 0;
  localStorage.clear();
});

inputTextArea.addEventListener("input", () => {
  //Count the number of characters
  charCount.textContent = inputTextArea.value.length;

  // Removes the whitespace from both the sides of the string
  let txt = inputTextArea.value.trim();

  //Split text at spaces into a array of substrings
  //Filter empty strings
  //Count length of this array
  wordCount.textContent = txt.split(" ").filter((str) => str !== "").length;
});

// Local Storage
//Save the text inputted to local storage
inputTextArea.addEventListener("input", () => {
  localStorage.setItem("text", inputTextArea.value);
});

//Get the text from local storage even after refreshing the page
inputTextArea.value = localStorage.getItem("text");
