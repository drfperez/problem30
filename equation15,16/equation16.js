function equation16() {
  let m = document.getElementById('m').value;
  let Fb = document.getElementById('Fb').value;
  let g = document.getElementById('g').value;
  let alpha = document.getElementById('alpha').value;
  let a1 = (Fb/m - g * (Math.sin(alpha)));

  document.getElementById('a1').value = a1;
  if (m== 0 && Fb== 0 && alpha == 0 ){
    document.getElementById('comment16').value = "Please enter data different from 0";
  }
  else if (a1 < 0){
    document.getElementById('comment16').value = "The braking force (a1) is negative";
    document.getElementById('thirdAnswer').value = a1;
  }else if (a1 == 0){
    document.getElementById('comment16').value = "There is no braking force (a1)";
    document.getElementById('thirdAnswer').value = a1;
  }else if (a1 > 0){
    document.getElementById('comment16').value = "The braking force is positive";
    
  }
}
function cancel() {
  document.getElementById('m').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('g').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('a1').value = null;
  document.getElementById('comment16').value = null;
}
console.log(a1);
