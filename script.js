// Select DOM elements for navigation toggle
const hamburger = document.getElementById("hamburger-btn");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// 1. hamburge
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

// 2. close the off-canvas drawer when clicking on the link?
navLinks.forEach(link => link.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//first part

document.getElementById('calc-btn').addEventListener('click', calculateWave);
document.getElementById('clear-btn').addEventListener('click', resetCalc);



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








