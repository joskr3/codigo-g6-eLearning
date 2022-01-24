let TI = ""; /*tipo de hamburguesa*/
let N = 0; /*numero de hamburguesas*/
let TP = ""; /*Tipo de pago*/
let PA = 0; /*Precio de hamburguesa*/
let CA = 0; /*Cargo por el uso de tarjeta*/
let TO = 0; /*Total sin cargo*/


function totalizar(TI, TP, N) {
  let TOT = 0; /*Total con cargo*/
  CA = 0;
  if (TP == "credito") {
    TO = precioHamburguesa(TI) * N;
    CA = TO * 0.05;
  } else {
    TO = precioHamburguesa(TI) * N;
    CA = 0;
  }
  TOT = TO + CA;
  return TOT;
}

function precioHamburguesa(hamburguesa) {
  PA = 0;
  switch (hamburguesa) {
    case "Sencilla":
      return (PA = 20);
      break;
    case "Doble":
      return (PA = 25);
      break;
    case "Triple":
      return (PA = 28);
      break;
    default:
      return (PA = 0);
  }
}

console.log(totalizar("Sencilla", "credito", 1));
