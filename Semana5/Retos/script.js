console.log("********************************************************");
console.log("Ejercicio 1");
let L; //cantidad de litros que produce
let PG; //precio del galon
let TG; //cantidad de galones de produce
let GA; //ganancia por la entrega de leche

// 1 galon = 3.785 litros

//L=10;
//PG=15;

L = prompt("la cantidad de litros que produce:" , 0);
PG = prompt("el precio de galon", 0);

TG = L/3.785;
GA = TG*PG ;

console.log(`el total por ${L} litros de leche es: ${GA}`);


console.log("********************************************************");
console.log("Ejercicio 2");

let TI;  //"sensillas", "dobles" , "triples";  // tipo de de hamburgesa
let N; //numero de haburgesa
let TP; //toipo de pago
let PA; //[20.00 , 25.00 , 28.00];
let CA = 1.05;
let TOT, TO;
let op;


TP = prompt("Tipo de pago: conTarjeta - sinTarjeta");
TI = prompt("Tipo de hambuergsa: sensillas - dobles - triples");
N = prompt("cuantas hamburguesas desea:", 0);

if(TP == "conTarjeta"){
    switch(TI){
        case "sensillas":  TOT = N*20.00*1.05;
        break;
        case "dobles": TOT = N*25.00*1.05;
        break;
        case "triples": TOT = N*28.00*1.05;
        break;
        default: console.log("no hay ese tipo de hamburguesa");
    }
}
else(TP == "sinTarjeta")
{
    switch(TI){
        case "sensillas":  TO = N*20.00;
        break;
        case "dobles": TO = N*25.00;
        break;
        case "triples": TO = N*28.00;
        break;
        default: console.log("no hay ese tipo de hamburguesa");
    }
}

console.log(`la persona debe pagar ${ TOT || TO } por las ${N} hamburguesas`);


console.log("********************************************************");
console.log("Ejercicio 3");


let NC; //numero de consulta
let CC; // costo de la cita
let TOTmedico; //costo del tratamiento


NC = prompt("El numero de cita es:", 0);


if(NC<=3){
    CC=200.00;
    console.log(`el costo de la cita sera: ${CC}`);
    TOTmedico=CC*NC;
    console.log(`el costo total del tratamiento: ${TOTmedico}`);
}
else if(NC<=5)
{
    CC=150.00;
    console.log(`el costo de la cita sera: ${CC}`);
    TOTmedico= (NC-3)*CC+600;
    console.log(`el costo total del tratamiento: ${TOTmedico}`);
}
else if (NC<=8)
{
    CC=100.00;
    console.log(`el costo de la cita sera: ${CC}`);
    TOTmedico = (NC-5)*CC+900;
    console.log(`el costo total del tratamiento: ${TOTmedico}`);
}

else 
{
    CC=50.00;
    console.log(`el costo de la cita sera: ${CC}`);
    TOTmedico = (NC-8)*CC+1200;
    console.log(`el costo total del tratamiento: ${TOTmedico}`);
}


