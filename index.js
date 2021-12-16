// picking the actual year for the footer
let year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;

// random credo string
// var credos = [
//   "I am proud of my work",
//   "Perfection is for everybody different",
//   "Be kind to yourself",
//   "Find your voice",
//   "Become a multi-lingual thinker",
//   "Have a client service mentality",
//   "Listen with intent",
//   "Consider the safety and wellbeing of the planet and its citizens",
//   "Work across all scales",
//   "None of us is as smart as all of us",
//   "Let ideas breathe",
//   "Dive deep into problem solving",
//   "Package every idea with a purpose",
// ];
var credos = [
  "Ich bin stolz auf meine Arbeit",
  "Perfektion ist für jeden anders",
  "Sei freundlich zu dir",
  "Finde deine Stimme",
  "Schaue üder den Tellerrand",
  "Der Klient ist der König",
  "Höre zu, um zu verstehen",
  "Sicherheit und Wohlstand für Alle ",
  "Arbeit über alle Leistungsphasen",
  "Keiner allein ist so klug wie die Summe aller",
  "Lass Ideen seinen freien Lauf",
  "Tauche tief in die Problemlösung ein",
  "Verpacke jede Idee mit einer Absicht",
];
function sentence() {
  var random = Math.floor(Math.random() * credos.length);
  credo = credos[random];
  document.querySelector(".credo").innerHTML = credo;
}
sentence();
