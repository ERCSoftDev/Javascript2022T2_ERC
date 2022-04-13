
let numero = prompt('Ingrese los numeros: ');
let resultado;

    for (let index = 2; index < numero / 2; index++) {
        if(numero % index == 0){
            resultado = numero;
            console.log('son divisible' + resultado);
        }
}
