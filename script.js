document.getElementById('calc-btn').addEventListener('click', calculateWave);
document.getElementById('clear-btn').addEventListener('click', resetCalc);
document.getElementById('click').addEventListener('click', flashCard);

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
  
}