// Select DOM elements for navigation toggle
const hamburger = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// 1. Toggle mobile menu drawer visibility on hamburger click
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// 2. Automatically close the off-canvas drawer when a link is clicked
navLinks.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}



document.getElementById('calc-btn').addEventListener('click', calculateWave);
document.getElementById('clear-btn').addEventListener('click', resetCalc);
document.getElementById('answer').addEventListener('click', flashCard);
document.getElementById('answer2').addEventListener('click', flashCard2);
document.getElementById('answer3').addEventListener('click', flashCard3);


function calculateWave() {
  let vText = document.getElementById('v').value;
  let fText = document.getElementById('f').value;
  let wText = document.getElementById('w').value;
  let result = document.getElementById('result'); // Fixed: lowercase 'result' to match HTML

  let v = Number(vText);
  let f = Number(fText);
  let w = Number(wText);

  // Checks for empty inputs ("") instead of spaces (" ")
  if (vText == "" && fText != "" && wText != "") {
    let ans = f * w;
    document.getElementById('v').value = ans;
    result.innerText = "Calculated Wave Speed = " + ans + " m/s";

  } else if (vText != "" && fText != "" && wText == "") {
    let ans = v / f;
    document.getElementById('w').value = ans;
    result.innerText = "Calculated Wavelength = " + ans + " m";

  } else if (vText != "" && fText == "" && wText != "") {
    // Fixed: Calculates frequency (f = v / w) and updates field 'f'
    let ans = v / w;
    document.getElementById('f').value = ans;
    result.innerText = "Calculated Frequency = " + ans + " Hz";

  } else {
    result.innerText = "Please enter exactly TWO values.";
  }
}

function resetCalc() {
  document.getElementById('v').value = "";
  document.getElementById('f').value = "";
  document.getElementById('w').value = "";
  document.getElementById('result').innerText = "";
}
function flashCard() {
  document.getElementById('answer').innerHTML = "The wavelength decreases while frequency remains constant.";
}
function flashCard2() {
  document.getElementById('answer2').innerHTML = "The oscillation is perpendicular to direction of wave.";
}
function flashCard3() {
  document.getElementById('answer3').innerHTML = "Region in a longitudinal wave where wave fronts are closer together.";
}

// attempt
const flashcards = [
  { question: "What happens to wavelength when light slows down during refraction?",answer: "The wavelength decreases while frequency remains constant."
},
  { question: "Transverse wave?", answer: "The oscillation is perpendicular to direction of wave."},
  {question: "What is meant by compression?", answer:"Region in a longitudinal wave where wave fronts are closer together."},
];

const container = document.getElementById("flashcard-container");

flashcards.forEach((card,index) => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  cardDiv.innerHTML = `
  <div class = "card-nner">
    <div class ="card-front>${card.question} </div>
    <div class = "card-back">${card.answer}</div>
    </div>
    `;

  cardDiv.addEventListener("click",() => {
    cardDiv.classList.toggle("flipped");
  });
  container.appendChild(cardDiv);
})






