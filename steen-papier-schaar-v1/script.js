// Span elementen
const humanOutput = document.querySelector("#human");
const computerOutput = document.querySelector("#computer");
const resultOutput = document.querySelector("#result");

// Buttons
const steenBtn = document.querySelector("#steen");
const papierBtn = document.querySelector("#papier");
const schaarBtn = document.querySelector("#schaar");

let humanChoice = "";
let computerChoice = "";

humanOutput.innerHTML = "Jouw keuze komt hier, maak je keuze!";

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) computerChoice = "steen";
  if (randomNumber === 2) computerChoice = "schaar";
  if (randomNumber === 3) computerChoice = "papier";
  computerOutput.innerHTML = computerChoice;
}

function bepaalUitkomst() {
  if (humanChoice === computerChoice) {
    resultOutput.innerHTML = "Gelijkspel!";
  } else if (
    (humanChoice === "steen" && computerChoice === "schaar") ||
    (humanChoice === "schaar" && computerChoice === "papier") ||
    (humanChoice === "papier" && computerChoice === "steen")
  ) {
    resultOutput.innerHTML = "Jij wint!";
  } else {
    resultOutput.innerHTML = "Computer wint!";
  }
}

steenBtn.addEventListener("click", function(event) {
  humanChoice = event.target.id;
  alert("Je hebt steen gekozen!");  // <-- deze regel toevoegen
  humanOutput.innerHTML = humanChoice;
  getComputerChoice();
  bepaalUitkomst();
});

papierBtn.addEventListener("click", function(event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  getComputerChoice();
  bepaalUitkomst();
});

schaarBtn.addEventListener("click", function(event) {
  humanChoice = event.target.id;
  humanOutput.innerHTML = humanChoice;
  getComputerChoice();
  bepaalUitkomst();
});