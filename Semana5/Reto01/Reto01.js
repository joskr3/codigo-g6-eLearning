let L = 800;
let PG = 16.35;
let TG = 0;

function galonesALitros(galones) {
  let litros = 0;
  return litros = galones * 3.785;
}

function litrosAGalones(litros) {
  let galones = 0;
  return galones = litros / 3.785;
}

function venta(galonesVendidos) {
  let venta = 0;
  return venta = galonesVendidos * PG;
}

TG = litrosAGalones(L);

console.log("Litros Vendidos: " + galonesALitros(1) + "\nImporte Vendido: " + venta(1));
