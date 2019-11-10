function equation7() {
  let Fb = document.getElementById('Fb').value;
  let m = document.getElementById('m').value;
  let t = document.getElementById('t').value;
  let v0 = document.getElementById('v0').value
  let x = -(Fb/(2*m))*(t*t) + (v0*t);
  document.getElementById('x').value=x;
  if (Fb == 0 && m == 0 && v0 == 0){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (x < 0){
    document.getElementById('comment').value = "The car is is in the left";
  }else if (m == 0){
    document.getElementById('comment').value = "Please introduce mass different from zero";
  }else if (x > 0){
    document.getElementById('comment').value = "The car is on the right ";
  }else if (x==0){
    document.getElementById('comment').value = "The car is stopped";
  }
}
function cancel() {
  document.getElementById('Fb').value = null;
  document.getElementById('m').value = null;
  document.getElementById('t').value = null;
  document.getElementById('v0').value = null;
  document.getElementById('x').value = null;
  document.getElementById('comment').value = null;
}
console.log