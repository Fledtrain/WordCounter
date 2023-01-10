let inputTextArea = document.getElementById("input-textarea");
let charCount = document.getElementById("char-count");
let wordCount = document.getElementById("word-count");

inputTextArea.addEventListener("input", () => {
  //Count the number of characters
  charCount.textContent = inputTextArea.value.length;

  // Removes the whitespace from both the sides of the string

  let txt = inputTextArea.value.trim();

  //SPlit text at spaces into a array of substrings
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

