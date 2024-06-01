const splashText = document.getElementById("wordText");
var arr = [
  "amazing",
  "weird",
  "hot",
  "wonderful",
  "hilarious",
  "beautiful",
  "crazy",
  "cold",
  "spectacular",
  "mingin",
  "warm",
  "freezing",
  "boiling",
  "epic",
  "important",
  "magical",
  "funny",
  "mad",
  "nice",
  "friendly",
  "kind"
];
const random = Math.floor(Math.random() * arr.length + 1);

splashText.innerHTML = "It's blumming " + arr[Math.floor(Math.random()*arr.length)] + "!";
