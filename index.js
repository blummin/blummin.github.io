const splashText = document.getElementById("splashText");
const random = Math.floor(Math.random() * 9);
let words = "having an error"

fetch('/words.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
    words = data;
  })
