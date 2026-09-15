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