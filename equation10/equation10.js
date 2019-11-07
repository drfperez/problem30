function equation10() {
  let m = document.getElementById('m').value;
  let v0 = document.getElementById('v0').value;
  let Ss = document.getElementById('Ss').value;
  let Fb = (m*(v0*2)) / (2*Ss);
  
  document.getElementById('Fb').value = Fb;
  if (m == 0 && v0 == 0 && Ss == 0){
    document.getElementById('comment').value = "Please enter data different from 0";
  }
  else if (Fb < 0){
    document.getElementById('comment').value = "The braking force Fb is negative";
    
  }else if (Fb == 0){
    document.getElementById('comment').value = "There is no braking force";
    
  }else if (Fb > 0){
    document.getElementById('comment').value = "The braking force is positive";
  }
}
function cancel() {
  document.getElementById('m').value = null;
  document.getElementById('v0').value = null;
  document.getElementById('Ss').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('comment').value = null;
}