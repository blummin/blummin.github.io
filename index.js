function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
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
  "kind",
  "stinky",
  "stupid",
  "strange",
  "dangerous",
  "silly",
  "suprising",
  "angry",
  "sad",
  "depressing",
  "shocking",
  "ballistic",
  "insane",
  "easy",
  "normal",
  "hard",
  "extreme"
];

splashText.innerHTML = arr[Math.floor(Math.random()*arr.length)] + "!";

splashText.animate([
  { transform: 'translateY(-2vw)' },
  { transform: 'translateY(0vw)' }
], {
  duration: 300,
  iterations: 5,
  easing: "cubic-bezier(0.05, 0.75, 0.55, 0.75)",
});

var i = 0;
setInterval(function () {
  splashText.innerHTML = arr[Math.floor(Math.random()*arr.length)] + "!";
  ++i
  if (i == 5) {
    window.clearInterval();
  }
}, 300);
