function equation22() {
  let Ss = document.getElementById('Ss').value;
  let v = document.getElementById('v').value;
  let g = document.getElementById('g').value;
  let alpha = document.getElementById('alpha').value;
  let m = document.getElementById('m').value;
  let Fb2 = (v*v)*(m)*(Math.cos(alpha)) / (2*Ss)

  document.getElementById('Ss1').value = Ss1;
  if (v == 0 && alpha == 0 && g == 0 && Ss == 0){
    document.getElementById('comment').value = "Please enter data different from 0!";
  }
  else if (Ss1 < 0){
    document.getElementById('comment').value = "The displacement Ss1 is negative";
  }else if (Ss1 == 0){
    document.getElementById('comment').value = "There is no displacament(";
  }else if (Ss1 > 0){
    document.getElementById('comment').value = "The displacement Ss1 is positive";
  }
}
function cancel() {
  document.getElementById('Ss').value = null;
  document.getElementById('g').value = null;
  document.getElementById('v').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('Ss1').value = null;
  document.getElementById('comment').value = null;
}