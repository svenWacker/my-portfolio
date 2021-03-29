// picking the actual year for the footer
let year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

// random credo string
var credos = [
  "I am proud of my work",
  "Perfection is for everybody different",
  "Be kind to yourself",
  "Find your voice",
  "Become a multi-lingual thinker",
  "Have a client service mentality",
  "Listen with intent",
  "Consider the safety and wellbeing of the planet and its citizens",
  "Work across all scales",
  "None of us is as smart as all of us",
  "Let ideas breathe",
  "Dive deep into problem solving",
  "Package every idea with a purpose",
];
function sentence() {
  var random = Math.floor(Math.random() * credos.length);
  credo = credos[random];
  document.querySelector(".credo").innerHTML = credo;
}
sentence();
