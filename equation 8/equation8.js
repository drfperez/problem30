function equation8() {
  let Fb = document.getElementById('Fb').value;
  let m = document.getElementById('m').value;
  let v0 = document.getElementById('v0').value
  let t = ((m*v0)/Fb);
  document.getElementById('t').value=t;
  if (Fb == 0 && m == 0 && v0 == 0){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (t < 0){
    document.getElementById('comment').value = "please enter another number";
  }else if (m == 0){
    document.getElementById('comment').value = "Please introduce mass different from zero";
  }else if (t > 0){
    document.getElementById('comment').value = "The time is positive ";
  }else if (t==0){
    document.getElementById('comment').value = "The time is none";
  }
}
function cancel() {
  document.getElementById('Fb').value = null;
  document.getElementById('m').value = null;
  document.getElementById('v0').value = null;
  document.getElementById('t').value = null;
  document.getElementById('comment').value = null;
}
console.log