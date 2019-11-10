function equation15() {
  let m = document.getElementById('m').value;
  let s = document.getElementById('s').value;
  let v = document.getElementById('v').value;
  let alpha = document.getElementById('alpha').value;
  let Fb = (v^2 * m * (Math.cos(alpha))) / (2 * s);

  document.getElementById('Fb').value = Fb;
  if (m== 0 && v== 0 && alpha == 0 ){
    document.getElementById('comment15').value = "Please enter data different from 0";
  }
  else if (Fb < 0){
    document.getElementById('comment15').value = "The braking force (Fb) is negative";
    document.getElementById('thirdAnswer').value = Fb;
  }else if (Fb == 0){
    document.getElementById('comment15').value = "There is no braking force (Fb)";
    document.getElementById('thirdAnswer').value = Fb;
  }else if (Fb > 0){
    document.getElementById('comment15').value = "The braking force is positive";
  }else if (Fb == null){
    document.getElementById('comment15').value = "Please introduce a value for Fb";
  }
}
function cancel() {
  document.getElementById('m').value = null;
  document.getElementById('s').value = null;
  document.getElementById('v').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('comment15').value = null;
}

