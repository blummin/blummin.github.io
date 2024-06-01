const splashText = document.getElementById("splashText");
const random = Math.floor(Math.random() * 9);
let words = null;
let word = "taking the bloody mick";

fetch('/words.txt')
  .then(response => response.text())
  .then((data) => {
    console.log(data)
    words = data;
  })
