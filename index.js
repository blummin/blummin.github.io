const splashText = document.getElementById("splashText");
const random = Math.floor(Math.random() * 9);

var arr = [
  "amazing",
  "weird",
  "hot",
  "wonderful",
  "hilarious",
  "beautiful",
  "crazy",
  "cold"
];

splashText.innerHTML = "It's blumming " + arr[Math.floor(Math.random()*arr.length)] + "!";
