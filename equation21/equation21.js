function equation21() {
  let Fb = document.getElementById('Fb').value;
  let m = document.getElementById('m').value;
  let v = document.getElementById('v').value;
  let g = document.getElementById('g').value;
  let alpha = document.getElementById('alpha').value;
  let Ts = (v / (Fb/m) + g * (Math.sin(alpha)));

  document.getElementById('Ts').value =Ts;
  if (m== 0 && v== 0 && alpha == 0 ){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (Ts < 0){
    document.getElementById('comment').value = "The braking force (Ts) is negative";
    document.getElementById('thirdAnswer').value = Ts;
  }else if (Ts == 0){
    document.getElementById('comment').value = "There is no braking force (Ts)";
    document.getElementById('thirdAnswer').value = Ts;
  }else if (Ts > 0){
    document.getElementById('comment').value = "The braking force is positive";
  }
}
function cancel() {
  document.getElementById('Fb').value = null;
  document.getElementById('m').value = null;
  document.getElementById('v').value = null;
  document.getElementById('g').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('Ts').value = null;
  document.getElementById('comment').value = null;
}
console.log(Ts);

