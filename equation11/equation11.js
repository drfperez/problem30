function equation11() {
  let f = document.getElementById('f').value;
  let m = document.getElementById('m').value;
  let g = document.getElementById('g').value;
  let Fb = f*m*g;
  
  document.getElementById('Fb').value = Fb;
  if (f == 0 && m == 0 && g == 0){
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
  document.getElementById('f').value = null;
  document.getElementById('m').value = null;
  document.getElementById('g').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('comment').value = null;
}