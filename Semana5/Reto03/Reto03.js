/* tres primeras citas 200 c/u
siguientes dos citas 150 c/u
siguientes tres citas 100 c/u */

let NC=0;
let CC=0;


function calculaCostos(NC){
  let TOT = 0;
  for(i=1; i<=NC;i++){
    if(i<=3){
      TOT = TOT+200;
    }else if(i>3 && i<=5){
      TOT = TOT + 150;
    }else if(i>5 && i<=8){
      TOT = TOT + 100;
    }else{
      TOT = TOT + 50;
    }
  }
  return TOT;
}

console.log(calculaCostos(8));