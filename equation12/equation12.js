function equation12() {
  let g = document.getElementById('g').value;
  let v0 = document.getElementById('v0').value;
  let Ss = document.getElementById('Ss').value;
  let f = (v0*2) / ((2*g)*Ss);
  
  document.getElementById('f').value = f;
  if (g == 0 && v0 == 0 && Ss == 0){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (f < 0){
    document.getElementById('comment').value = "The braking force Fb is negative";
    
  }else if (f == 0){
    document.getElementById('comment').value = "There is no braking force";
    
  }else if (f > 0){
    document.getElementById('comment').value = "The braking force is positive";
  }
}
function cancel() {
  document.getElementById('g').value = null;
  document.getElementById('v0').value = null;
  document.getElementById('Ss').value = null;
  document.getElementById('f').value = null;
  document.getElementById('comment').value = null;
}
console.log