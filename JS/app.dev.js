function module() {
  let $v1 = document.querySelector("#v1").value;
  let $v2 = document.querySelector("#v2").value;

  let vr1 = $v1 * $v1 + $v2 * $v2;
  let vr2 = parseFloat(Math.sqrt(vr1)).toFixed(2);

  let $Vf = document.querySelector("#vF");

  $Vf.innerHTML = "Vf= " + vr2 + " m/s";
  
  let tan = $v1 / $v2
  let tanR = Math.atan(tan)
  let convTan = parseInt(tanR * 180/3.141592)
  let ang = document.querySelector('#ang')
  ang.innerHTML= convTan + '°'
}
module();

function para(){
    let $Vb = document.querySelector('#Vb').value
    let $vc = document.querySelector('#Vc').value
    let $ang1 = document.querySelector('#ang1').value
    let $ang2 = document.querySelector('#ang2').value
    let $angF = document.querySelector('#AngF')
    let vr = document.querySelector('#Vr')
    let sumaAngles = Number($ang1)  + Number($ang2)
    let degreToRad = sumaAngles * 3.14159265 / 180
    let cos = Math.cos(degreToRad)
    let resolve1 = parseFloat(($Vb * $Vb + $vc * $vc) + (2 * $Vb * $vc * cos)).toFixed(2)
    let resolve2 = parseFloat(Math.sqrt(resolve1)).toFixed(2)
    // console.log(resolve1)
    // console.log(resolve2)
    $angF.innerHTML = sumaAngles + '°'
    vr.innerHTML = 'Vf= ' + resolve2

    //draw graphic

}

para()