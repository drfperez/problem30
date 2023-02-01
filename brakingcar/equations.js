function equation3() {
  let Fb3 = document.getElementById('Fb3').value;
  let m3 = document.getElementById('m3').value;
  let a = -(Fb3/m3);
  document.getElementById('a').value=a;
  if (Fb3 == 0 && m3 == 0){
    document.getElementById('comment3').value = "Please enter data different from 0";
  }
  else if (a < 0){
    document.getElementById('comment3').value = "The acceleration is negative";
  }else if (m3 == 0){
    document.getElementById('comment3').value = "Please introduce mass different from zero";
  }else if (a > 0){
    document.getElementById('comment3').value = "The acceleration is positive ";
  }
}
function equation5() {
  let Fb5 = document.getElementById('Fb5').value;
  let m5 = document.getElementById('m5').value;
  let t5 = document.getElementById('t5').value;
  let v05 = document.getElementById('v05').value
  let v = ((-Fb5)/(m5))*(t5)+ (v05);
  document.getElementById('v').value=v;
  if (Fb5 == 0 && m5 == 0 && v05 == 0){
    document.getElementById('comment5').value = "Please enter data different from 0";
  }
  else if (v < 0){
    document.getElementById('comment5').value = "The car is moving to the left";
  }else if (m5 == 0){
    document.getElementById('comment5').value = "Please introduce mass different from zero";
  }else if (v > 0){
    document.getElementById('comment5').value = "The car is moving to the right ";
  }else if (v==0){
    document.getElementById('comment5').value = "The car is stopped";
  }
}
  function equation7() {
    let Fb7 = document.getElementById('Fb7').value;
    let m7 = document.getElementById('m7').value;
    let t7 = document.getElementById('t7').value;
    let v07 = document.getElementById('v07').value
    let x = -(Fb7/(2*m7))*(t7*t7) + (v07*t7);
    document.getElementById('x').value=x;
    if (Fb7 == 0 && m7 == 0 && v07 == 0){
      document.getElementById('comment7').value = "Please enter data different from 0";
    }
    else if (x < 0){
      document.getElementById('comment7').value = "The car is is in the left";
    }else if (m7 == 0){
      document.getElementById('comment7').value = "Please introduce mass different from zero";
    }else if (x > 0){
      document.getElementById('comment7').value = "The car is on the right";
    }else if (x==0){
      document.getElementById('comment7').value = "The car is stopped";
    }else if (t7 < t){
      document.getElementById('comment7').value = "Please enter the same time";
    }else if (t7 > t){
      document.getElementById('comment7').value = "Please enter the same time";
    }
  }
    function equation8() {
      let Fb8 = document.getElementById('Fb8').value;
      let m8 = document.getElementById('m8').value;
      let v08 = document.getElementById('v08').value
      let t = ((m8*v08)/Fb8);
      document.getElementById('t').value=t;
      if (Fb8 == 0 && m8 == 0 && v08 == 0){
        document.getElementById('comment8').value = "Please enter data different from 0";
      }
      else if (t < 0){
        document.getElementById('comment8').value = "please enter another number";
      }else if (m8 == 0){
        document.getElementById('comment8').value = "Please introduce mass different from zero";
      }else if (t > 0){
        document.getElementById('comment8').value = "The time is positive ";
      }else if (t==0){
        document.getElementById('comment8').value = "The time is none";
      }
}
function equation10() {
  let m10 = document.getElementById('m10').value;
  let v010 = document.getElementById('v010').value;
  let Ss10 = document.getElementById('Ss10').value;
  let Fb = (m10*(v010*2)) / (2*Ss10);
  
  document.getElementById('Fb10').value = Fb;
  if (m10 == 0 && v010 == 0 && Ss10 == 0){
    document.getElementById('comment10').value = "Please enter data different from 0";
  }
  else if (Fb < 0){
    document.getElementById('comment10').value = "The braking force Fb is negative";
    
  }else if (Fb == 0){
    document.getElementById('comment10').value = "There is no braking force";
    
  }else if (Fb > 0){
    document.getElementById('comment10').value = "The braking force is positive";
  }
}


function equation11() {
  let f11 = document.getElementById('f11').value;
  let m11 = document.getElementById('m11').value;
  let g11 = document.getElementById('g11').value;
  let Fb = f11*m11*g11;
  
  document.getElementById('Fb11').value = Fb;
  if (f11 == 0 && m11 == 0 && g11 == 0){
    document.getElementById('comment11').value = "Please enter data different from 0";
  }
  else if (Fb < 0){
    document.getElementById('comment11').value = "The braking force Fb is negative";
    
  }else if (Fb == 0){
    document.getElementById('comment11').value = "There is no braking force";
    
  }else if (Fb > 0){
    document.getElementById('comment11').value = "The braking force is positive";
  }
}


function equation12() {
  let g12 = document.getElementById('g12').value;
  let v012 = document.getElementById('v012').value;
  let Ss12 = document.getElementById('Ss12').value;
  let F = (v012*2) / ((2*g12)*Ss12);
  
  document.getElementById('F12').value = F;
  if (g12 == 0 && v012 == 0 && Ss12 == 0){
    document.getElementById('comment12').value = "Please enter data different from 0";
  }
  else if (F < 0){
    document.getElementById('comment12').value = "The braking force Fb is negative";
    
  }else if (F == 0){
    document.getElementById('comment12').value = "There is no braking force";
    
  }else if (F > 0){
    document.getElementById('comment12').value = "The braking force is positive";
  }
}
function equation15() {
  let m15 = document.getElementById('m15').value;
  let s15 = document.getElementById('s15').value;
  let v15 = document.getElementById('v15').value;
  let alpha = document.getElementById('alpha').value;
  let Fb = (v15^2 * m15 * (Math.cos(alpha))) / (2 * s15);

  document.getElementById('Fb').value = Fb;
  if (m15== 0 && v15== 0 && alpha == 0 ){
    document.getElementById('comment15').value = "Please enter data different from 0";
  }
  else if (Fb < 0){
    document.getElementById('comment15').value = "The braking force (Fb) is negative";
    document.getElementById('thirdAnswer').value = Fb;
  }else if (Fb == 0){
    document.getElementById('comment15').value = "There is no braking force (Fb)";
    document.getElementById('thirdAnswer').value = Fb;
  }else if (Fb > 0){
    document.getElementById('comment15').value = "The braking force is positive";
  }else if (Fb == null){
    document.getElementById('comment15').value = "Please introduce a value for Fb";
  }
}
function equation16() {
  let m16 = document.getElementById('m16').value;
  let Fb16 = document.getElementById('Fb16').value;
  let g16 = document.getElementById('g16').value;
  let alpha = document.getElementById('alpha').value;
  let a1 = (Fb16/m16 - g16 * (Math.sin(alpha)));

  document.getElementById('a1').value = a1;
  if (m16== 0 && Fb16== 0 && alpha == 0 ){
    document.getElementById('comment16').value = "Please enter data different from 0";
  }
  else if (a1 < 0){
    document.getElementById('comment16').value = "The braking force (a1) is negative";
    document.getElementById('thirdAnswer').value = a1;
  }else if (a1 == 0){
    document.getElementById('comment16').value = "There is no braking force (a1)";
    document.getElementById('thirdAnswer').value = a1;
  }else if (a1 > 0){
    document.getElementById('comment16').value = "The braking force is positive"
  }
}
function equation18() {
  let m18 = document.getElementById('m18').value;
  let g18 = document.getElementById('g18').value;
  let Fb18 = document.getElementById('Fb18').value;
  let alpha = document.getElementById('alpha').value;
  let t18 = document.getElementById('t18').value;
  let v1 = -(Fb18 / m18) * t18 - g18 * t18 * (Math.sin(alpha));

  document.getElementById('v1').value = v1;
  if (Fb18== 0 && g18== 0 && alpha == 0 ){
    document.getElementById('comment18').value = "Please enter data different from 0";
  }
  else if (v1 < 0){
    document.getElementById('comment18').value = "The acceleration (v1) is negative";
    document.getElementById('thirdAnswer').value = v1;
  }else if (m3== 0){
    document.getElementById('comment18').value = "Please introduce mass different from zero";
    document.getElementById('thirdAnswer').value = v1;
  }else if (v1 > 0){
    document.getElementById('comment18').value = "The acceleraion is positive";
  }
}
function equation20() {
  let m20 = document.getElementById('m20').value;
  let t20 = document.getElementById('t20').value;
  let Fb20 = document.getElementById('Fb20').value;
  let alpha = document.getElementById('alpha').value;
  let x1 = -(Fb20 / 2 * m20) * t20^2 - (t20^2 / 2) * (Math.sin(alpha)) + t20;

  document.getElementById('x1').value = x1;
  if (Fb20== 0 && t20== 0 && alpha == 0 ){
    document.getElementById('comment20').value = "Please enter data different from 0";
  }
  else if (x1 < 0){
    document.getElementById('comment20').value = "The acceleration (x1) is negative";
    document.getElementById('thirdAnswer').value = x1;
  }else if (m20== 0){
    document.getElementById('comment20').value = "Please introduce mass different from zero";
    document.getElementById('thirdAnswer').value = x1;
  }else if (x1 > 0){
    document.getElementById('comment20').value = "The acceleraion is positive";
  }
}
function equation21() {
  let Fb21 = document.getElementById('Fb21').value;
  let m21 = document.getElementById('m21').value;
  let v21 = document.getElementById('v21').value;
  let g21 = document.getElementById('g21').value;
  let alpha = document.getElementById('alpha').value;
  let Ts = (v21 / (Fb21/m21) + g21 * (Math.sin(alpha)));

  document.getElementById('Ts').value =Ts;
  if (m21== 0 && v21== 0 && alpha == 0 ){
    document.getElementById('comment21').value = "Please enter data different from 0";
  }
  else if (Ts < 0){
    document.getElementById('comment21').value = "The braking force (Ts) is negative";
    document.getElementById('thirdAnswer').value = Ts;
  }else if (Ts == 0){
    document.getElementById('comment21').value = "There is no braking force (Ts)";
    document.getElementById('thirdAnswer').value = Ts;
  }else if (Ts > 0){
    document.getElementById('comment21').value = "The braking force is positive";
  }
}
function equation22() {
  let g22 = document.getElementById('g22').value;
  let s22 = document.getElementById('s22').value;
  let v22 = document.getElementById('v22').value;
  let alpha = document.getElementById('alpha').value;
  let Ss = (s22 * v22^2 / v22^2 * (Math.cos(alpha)) + 2 * s22 * g22 * (Math.sin(alpha)));

  document.getElementById('Ss').value = Ss;
  if (m22== 0 && v22== 0 && alpha == 0 ){
    document.getElementById('comment22').value = "Please enter data different from 0";
  }
  else if (Ss < 0){
    document.getElementById('comment22').value = "The braking force (Ss) is negative";
    document.getElementById('thirdAnswer').value = Ss;
  }else if (Ss == 0){
    document.getElementById('comment22').value = "There is no braking force (Ss)";
    document.getElementById('thirdAnswer').value = Ss;
  }else if (Ss > 0){
    document.getElementById('comment22').value = "The braking force is positive";
  }
}
function equation25() {
  let Ss25 = document.getElementById('Ss25').value;
  let v25 = document.getElementById('v25').value;
  let g25 = document.getElementById('g25').value;
  let alpha = document.getElementById('alpha').value;
  let m25 = document.getElementById('m25').value;
  let Fb2 = (v25*v25)*(m25)*(Math.cos(alpha)) / (2*Ss25)

  document.getElementById('Fb2').value = Fb2;
  if (v25 == 0 && alpha == 0 && g25 == 0 && Ss25 == 0 && m25== 0){
    document.getElementById('comment25').value = "Please enter data different from 0!";
  }
  else if (Fb2 < 0){
    document.getElementById('comment25').value = "The displacement Fb2 is negative";
  }else if (Fb2 == 0){
    document.getElementById('comment25').value = "There is no displacement";
  }else if (Fb2 > 0){
    document.getElementById('comment25').value = "The displacement Fb2 is positive";
  }
}
function equation33() {
  let m33 = document.getElementById('m33').value;
    let ss33 =60.49*m33;

  document.getElementById('ss33').value = ss33;
  if ( m33 == 0){
    document.getElementById('comment33').value = "Please enter data diferent from 0";
  }
  else if (ss33 < 0){
    document.getElementById('comment33').value = "Please enter different datta";
  }
  else if (ss33 == 0){
      document.getElementById('comment33').value = "There is no travelled distance";
  }else if (m33 == 0){
    document.getElementById('comment33').value = "Please introduce mass different from 0";
  }else if (ss33 > 0){
    document.getElementById('comment33').value = "The travelled distance is positive";
  }
}
function equation32() {
  let Fb32 = document.getElementById('Fb32').value;
  let m32 = document.getElementById('m32').value;
  let g32 = document.getElementById('g32').value ;
  let alpha32 = document.getElementById('alpha32').value;
  let v32 = document.getElementById('v32').value
    let t32 = v32 / ((Fb32/m32) - (g32 * (Math.sin(alpha32*((2*Math.PI)/360)))));

  document.getElementById('t32').value = t32;
  if (Fb32 == 0 && m32 == 0 && alpha32 == 0 && g32 == 0){
    document.getElementById('comment32').value = "Please enter data diferent from 0";
  }
  else if (t32 < 0){
    document.getElementById('comment32').value = "Please enter different datta";
  }
  else if (t32 == 0){
      document.getElementById('comment32').value = "There is no time stopping";
  }else if (m32 == 0){
    document.getElementById('comment32').value = "Please introduce mass different from 0";
  }else if (t32 > 0){
    document.getElementById('comment32').value = "The time stopping is positive";
  }
}
function equation31() {
  let Fb31 = document.getElementById('Fb31').value;
  let m31 = document.getElementById('m31').value;
  let g31 = document.getElementById('g31').value ;
  let alpha31 = document.getElementById('alpha31').value;
  let ts31 = document.getElementById('ts31').value
    let v31 = ts31 * (Fb31/m31) - (g31 * (Math.sin(alpha31*((2*Math.PI)/360))));

  document.getElementById('v31').value = v31;
  if (Fb31 == 0 && m31 == 0 && alpha31 == 0 && g31 == 0){
    document.getElementById('comment31').value = "Please enter data diferent from 0";
  }
  else if (v31 < 0){
    document.getElementById('comment31').value = "The speed is negative";
  }
  else if (v31 == 0){
      document.getElementById('comment31').value = "There is no speed";
  }else if (m31 == 0){
    document.getElementById('comment31').value = "Please introduce mass different from 0";
  }else if (v31 > 0){
    document.getElementById('comment31').value = "The speed is positive";
  }
}
function equation26() {
  let Fb26 = document.getElementById('Fb26').value;
  let m26 = document.getElementById('m26').value;
  let g26 = document.getElementById('g26').value ;
  let alpha26 = document.getElementById('alpha26').value;
    let a26 = -(Fb26/m26) + (g26 * (Math.sin(alpha26*((2*Math.PI)/360))));

  document.getElementById('a26').value = a26;
  if (Fb26 == 0 && m26 == 0 && alpha26 == 0 && g26 == 0){
    document.getElementById('comment26').value = "Please enter data diferent from 0";
  }
  else if (a26 < 0){
    document.getElementById('comment26').value = "The acceleration is negative";
  }
  else if (a26 == 0){
      document.getElementById('comment26').value = "There is no acceleration";
  }else if (m26 == 0){
    document.getElementById('comment26').value = "Please introduce mass different from 0";
  }else if (a26 > 0){
    document.getElementById('comment26').value = "The acceleration is positive";
  }
}
function cancel() {
  document.getElementById('v25').value = null;
  document.getElementById('m25').value = null;
  document.getElementById('g25').value = null;
  document.getElementById('Ss25').value = null;
  document.getElementById('comment25').value = null;
  document.getElementById('g16').value = null;
  document.getElementById('g18').value = null;
  document.getElementById('g21').value = null;
  document.getElementById('g22').value = null;
  document.getElementById('s22').value = null;
  document.getElementById('s15').value = null;
  document.getElementById('v01').value = null;
  document.getElementById('v21').value = null;
  document.getElementById('v22').value = null;
  document.getElementById('alpha').value = null;
  document.getElementById('Ss').value = null;
  document.getElementById('comment22').value = null;
  document.getElementById('Fb').value = null;
  document.getElementById('Fb20').value = null;
  document.getElementById('Fb18').value = null;
  document.getElementById('Fb02').value = null;
  document.getElementById('m15').value = null;
  document.getElementById('m16').value = null;
  document.getElementById('m18').value = null;
  document.getElementById('m20').value = null;
  document.getElementById('m21').value = null;
  document.getElementById('Ts').value = null;
  document.getElementById('comment21').value = null;
  document.getElementById('x15').value = null;
  document.getElementById('comment20').value = null;
  document.getElementById('a15').value = null;
  document.getElementById('comment18').value = null;
  document.getElementById('v15').value = null;
  document.getElementById('t20').value = null;
  document.getElementById('t18').value = null;
  document.getElementById('comment16').value = null;
  document.getElementById('comment15').value = null;
  document.getElementById('m10').value = null;
  document.getElementById('v010').value = null;
  document.getElementById('Ss10').value = null;
  document.getElementById('Fb10').value = null;
  document.getElementById('comment10').value = null;
  document.getElementById('f11').value = null;
  document.getElementById('m11').value = null;
  document.getElementById('g11').value = null;
  document.getElementById('Fb11').value = null;
  document.getElementById('comment11').value = null;
  document.getElementById('g12').value = null;
  document.getElementById('v012').value = null;
  document.getElementById('Ss12').value = null;
  document.getElementById('F12').value = null;
  document.getElementById('comment12').value = null;
  document.getElementById('Fb26').value = null;
  document.getElementById('Fb31').value = null;
  document.getElementById('m31').value = null;
  document.getElementById('v31').value = null;
  document.getElementById('g31').value = null;
  document.getElementById('alpha31').value = null;
  document.getElementById('ts31').value = null;
  document.getElementById('Fb32').value = null;
  document.getElementById('m32').value = null;
  document.getElementById('v32').value = null;
  document.getElementById('g32').value = null;
  document.getElementById('alpha32').value = null;
  document.getElementById('t32').value = null;
  document.getElementById('m26').value = null;
  document.getElementById('g26').value = null;
  document.getElementById('alpha26').value = null;
  document.getElementById('comment32').value = null;
  document.getElementById('a26').value = null;
  document.getElementById('comment26').value = null;
  document.getElementById('comment31').value = null;
  document.getElementById('ss33').value = null;
  document.getElementById('m33').value = null;
  document.getElementById('comment33').value = null;
  document.getElementById('comment3').value = null;
  document.getElementById('comment5').value = null;
  document.getElementById('comment7').value = null;
  document.getElementById('comment8').value = null;
  document.getElementById('m3').value = null;
  document.getElementById('m5').value = null;
  document.getElementById('m7').value = null;
  document.getElementById('m8').value = null;
  document.getElementById('Fb3').value = null;
  document.getElementById('Fb5').value = null;
  document.getElementById('Fb7').value = null;
  document.getElementById('Fb8').value = null;
  document.getElementById('v05').value = null;
  document.getElementById('v07').value = null;
  document.getElementById('v08').value = null;
  document.getElementById('t5').value = null;
  document.getElementById('t7').value = null;
  document.getElementById('t8').value = null;
  }