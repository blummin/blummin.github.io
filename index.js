const splashText = document.getElementById("splashText");
const random = Math.floor(Math.random() * 9);

fetch('/words.txt')
  .then(response => response.text())
  .then((data) => {
    word = data.readline(random);
    print(word)
  })
