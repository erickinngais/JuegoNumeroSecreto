function holaMundoConsola(){
    console.log('Hola, mundo!');
}
holaMundoConsola();

function holaNombre(nombre){
    console.log(`Hola, ${nombre}`);
}
holaNombre('Erick');

function doble (numero){
    return(numero*2);
}
let rdoble = doble(9);
console.log (rdoble);

function promedio (num1,num2,num3){
  return(num1 + num2 + num3) / 3;
}
let rpromedio = promedio(8,9,5);
console.log(rpromedio);

function mayor (number1, number2){
    if(number1 > number2){
        return parseInt(number1);
    } else {
        return parseInt(number2);
    }
}
let rmayor = mayor(5,8);
console.log(rmayor);

function potencia (numero){
    return(numero*numero);
}
let rpotencia = potencia(5);
console.log(rpotencia);