/* tres primeras citas 200 c/u
siguientes dos citas 150 c/u
siguientes tres citas 100 c/u */

let NC=0;
let CC=0;
let TOT = 0;

function calculaCostos(NC){
  for(i=1; i<=NC;i++){
    if(i<=3){
      CC = CC+200;
    }else if(i>3 && i<=5){
      CC = CC + 150;
    }else if(i>5 && i<=8){
      CC = CC + 100;
    }else{
      TOT = TOT + 50;
    }
  }
  return CC;
}

console.log("Costo de Cita: " + calculaCostos(9) + "\nCosto Tratamiento: " + TOT);