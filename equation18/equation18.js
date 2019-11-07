function equation18() {
  let m = document.getElementById('m').value;
  let g = document.getElementById('g').value;
  let Fb = document.getElementById('Fb').value;
  let alpha = document.getElementById('alpha').value;
  let a1 = -(Fb / m) - g * (Math.sin(alpha));

  document.getElementById('a1').value = a1;
  if (Fb== 0 && g== 0 && alpha == 0 ){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (a1 < 0){
    document.getElementById('comment').value = "The acceleration (a1) is negative";
    document.getElementById('thirdAnswer').value = a1;
  }else if (m == 0){
    document.getElementById('comment').value = "Please introduce mass different from zero";
    document.getElementById('thirdAnswer').value = a1;
  }else if (a1 > 0){
    document.getElementById('comment').value = "The acceleraion is positive";
  }
}
function cancel() {
  document.getElementById('m').value = null;
  document.getElementById('g').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('a1').value = null;
  document.getElementById('comment').value = null;
}
console.log(a1);
