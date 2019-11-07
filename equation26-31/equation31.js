let v0;
function equation31() {
  let Fb2 = document.getElementById('Fb2').value;
  let m = document.getElementById('m').value;
  let g = document.getElementById('g').value ;
  let alpha = document.getElementById('alpha').value;
  let ts2 = document.getElementById('ts2').value
    let v0 = ts2 * (Fb2/m) - (g * (Math.sin(alpha*((2*Math.PI)/360))));

  document.getElementById('v0').value = v0;
  if (Fb2 == 0 && m == 0 && alpha == 0 && g == 0){
    document.getElementById('comment31').value = "Please enter data diferent from 0";
  }
  else if (v0 < 0){
    document.getElementById('comment31').value = "The speed is negative";
  }
  else if (v0 == 0){
      document.getElementById('comment31').value = "There is no speed";
  }else if (m == 0){
    document.getElementById('comment31').value = "Please introduce mass different from 0";
  }else if (v0 > 0){
    document.getElementById('comment31').value = "The speed is positive";
  }
}
function cancel() {
  document.getElementById('Fb2').value = null;
  document.getElementById('m').value = null;
  document.getElementById('g').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('v0').value = null;
  document.getElementById('comment31').value = null;
}
console.log(v0);