function equation3() {
  let Fb = document.getElementById('Fb').value;
  let m = document.getElementById('m').value;
  let a = -(Fb/m);
  document.getElementById('a').value=a;
  if (Fb == 0 && m == 0){
    document.getElementById('comment3').value = "Please enter data different from 0";
  }
  else if (a < 0){
    document.getElementById('comment3').value = "The acceleration is negative";
  }else if (m == 0){
    document.getElementById('comment3').value = "Please introduce mass different from zero";
  }else if (a > 0){
    document.getElementById('comment3').value = "The acceleration is positive ";
  }
}
function cancel() {
  document.getElementById('Fb').value = null;
  document.getElementById('m').value = null;
  document.getElementById('a').value = null;
  document.getElementById('comment3').value = null;
}
console.log