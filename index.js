const splashText = document.getElementById("wordText");
const btn = document.getElementById("againBtn");
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
  "extreme",
  "fat",
  "big",
  "massive",
  "tiny",
  "small",
  "idiotic",
  "odd",
  "dirty",
  "expensive",
  "difficult",
  "clever",
  "smart",
  "calm",
  "lonely",
  "sick",
  "honest",
  "true",
  "fake",
  "false",
  "annoying",
  "narrow",
  "thin",
  "thick",
  "tall"
];

splashText.innerHTML = arr[Math.floor(Math.random()*arr.length)] + "!";

random();

function random(){
  splashText.style.color = "#FFFFFF7F";
  btn.style.display = "none";
  splashText.innerHTML = arr[Math.floor(Math.random()*arr.length)] + "!";
  splashText.animate([
    { transform: 'translateY(-2vw)' },
    { transform: 'translateY(0vw)' }
  ], {
    duration: 200,
    iterations: 9,
    easing: "cubic-bezier(0.05, 0.75, 0.55, 0.75)",
  });
    
  var i = 0;
  var jeez = setInterval(function () {
    splashText.innerHTML = arr[Math.floor(Math.random()*arr.length)] + "!";
    ++i
    if (i == 8) {
      splashText.style.color = "white";
      btn.style.display = "inline-block";
      window.clearInterval(jeez);
    }
  }, 200);
}
