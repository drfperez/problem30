function equation20() {
  let m = document.getElementById('m').value;
  let t = document.getElementById('t').value;
  let Fb = document.getElementById('Fb').value;
  let alpha = document.getElementById('alpha').value;
  let x1 = -(Fb / 2 * m) * t^2 - (t^2 / 2) * (Math.sin(alpha)) + t;

  document.getElementById('x1').value = x1;
  if (Fb== 0 && t== 0 && alpha == 0 ){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (x1 < 0){
    document.getElementById('comment').value = "The acceleration (x1) is negative";
    document.getElementById('thirdAnswer').value = x1;
  }else if (m == 0){
    document.getElementById('comment').value = "Please introduce mass different from zero";
    document.getElementById('thirdAnswer').value = x1;
  }else if (x1 > 0){
    document.getElementById('comment').value = "The acceleraion is positive";
  }
}
function cancel() {
  document.getElementById('m').value = null;
  document.getElementById('t').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('x1').value = null;
  document.getElementById('comment').value = null;
}
console.log(x1);
