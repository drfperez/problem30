function equation5() {
  let Fb = document.getElementById('Fb').value;
  let m = document.getElementById('m').value;
  let t = document.getElementById('t').value;
  let v0 = document.getElementById('v0').value
  let v = ((-Fb)/(m))*(t)+ (v0);
  document.getElementById('v').value=v;
  if (Fb == 0 && m == 0 && v0 == 0){
    document.getElementById('comment4').value = "Please enter data different from 0";
  }
  else if (v < 0){
    document.getElementById('comment4').value = "The car is moving to the left";
  }else if (m == 0){
    document.getElementById('comment4').value = "Please introduce mass different from zero";
  }else if (v > 0){
    document.getElementById('comment4').value = "The car is moving to the right ";
  }else if (v==0){
    document.getElementById('comment4').value = "The car is stopped";
  }
}
function cancel() {
  document.getElementById('Fb').value = null;
  document.getElementById('m').value = null;
  document.getElementById('t').value = null;
  document.getElementById('v0').value = null;
  document.getElementById('v').value = null;
  document.getElementById('comment4').value = null;
}
console.log