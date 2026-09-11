document.getElementById('calc-btn').addEventListener('click', calculateWave);
document.getElementById('clear-btn').addEventListener('click', resetCalc);

function calculateWave(){
let vText = document.getElementById('v').value;
let fText = document.getElementById('f').value;
let wText = document.getElementById('w').value;
let result = document.getElementById('Result');

let v = Number(vText);
let f = Number(fText);
let w = Number(wText);

if (vText == " " && fText != " " && wText != " ") {
    let ans = f * w;
    document.getElementById('v').value = ans;
    result.innerText = "Calculated Wave Speed = " + ans + " m/s";
}else if (vText != " " && fText != " " && wText == " ") {
    let ans = v / f;
    document.getElementById('w').value = ans;
    result.innerText = "Calculated Wavelength = " + ans + " m";
}else if (vText != " " && fText == " " && wText != " " ) {
    let ans = v / f;
    document.getElementById('w').value = ans;
    result.innerText = "Calculated Wavelength = " + ans + " m";
}else {
    // If the user didn't fill in exactly 2 boxes
    result.innerText = "Please enter exactly TWO values.";
  }
}
function resetCalc(){
    document.getElementById('v').value = "";
  document.getElementById('f').value = "";
  document.getElementById('w').value = "";
  document.getElementById('result').innerText = "";
}
