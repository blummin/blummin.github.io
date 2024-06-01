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

for (let tim = 0; tim < 4; tim++){
  const random = Math.floor(Math.random() * arr.length + 1);
  splashText.innerHTML = arr[Math.floor(Math.random()*arr.length)] + "!";
  splashText.animate([
    { transform: 'translateY(-2vw)' },
    { transform: 'translateY(0vw)' }
  ], {
    duration: 300,
    iterations: 5,
    easing: "cubic-bezier(0.05, 0.75, 0.55, 0.75)",
  });
}
