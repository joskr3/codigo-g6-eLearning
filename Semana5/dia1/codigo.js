let pesoAna;
let pesoAna;
let pesoJuan;
let pesoJuan;
console.log("Ana ingresa tu peso");
console.log(pesoAna);
console.log("Ana ingresa tu altura");
console.log(alturaAna);

console.log("Juan ingresa tu peso");
console.log(pesoJuan);
console.log("Juan ingresa tu altura");
console.log(alturaJuan);

let resultadoAna;
let resultadoJuan;

resultadoAna=pesoAna/(alturaAna*alturaAna);
resultadoJuan=pesoJuan/(alturaJuan*alturaJuan);

if(resultadoAna > resultadoJuan){
    console.log("Ana tiene el BMI mas alto");
}
else{
    console.log("Juan tiene el BMI mas alto");
}