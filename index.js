const splashText = document.getElementById("splashText");
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
const random = Math.floor(Math.random() * arr.length + 1);

splashText.innerHTML = "It's blumming " + arr[Math.floor(Math.random()*arr.length)] + "!";
