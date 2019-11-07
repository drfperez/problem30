let a2;
function equation26() {
  let Fb2 = document.getElementById('Fb2').value;
  let m = document.getElementById('m').value;
  let g = document.getElementById('g').value ;
  let alpha = document.getElementById('alpha').value;
    let a2 = -(Fb2/m) + (g * (Math.sin(alpha*((2*Math.PI)/360))));

  document.getElementById('a2').value = a2;
  if (Fb2 == 0 && m == 0 && alpha == 0 && g == 0){
    document.getElementById('comment26').value = "Please enter data diferent from 0";
  }
  else if (a2 < 0){
    document.getElementById('comment26').value = "The acceleration is negative";
  }
  else if (a2 == 0){
      document.getElementById('comment26').value = "There is no acceleration";
  }else if (m == 0){
    document.getElementById('comment26').value = "Please introduce mass different from 0";
  }else if (a2 > 0){
    document.getElementById('comment26').value = "The acceleration is positive";
  }
}
function cancel() {
  document.getElementById('Fb2').value = null;
  document.getElementById('m').value = null;
  document.getElementById('g').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('a2').value = null;
  document.getElementById('comment26').value = null;
}
console.log(a2);