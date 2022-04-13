
let num_1 = prompt('Ingrese el primer numero: ');
let num_2 = prompt('Ingrese el segundo numero: ');
let num_3 = prompt('Ingrese el tercer numero: ');
let resultado;

    if(num_1 > num_2 && num_1 > num_3){
            resultado=num_1;
            console.log('el mayor es: ' + resultado);
    }else{
        if(num_2 > num_1 && num_2 > num_3){
            resultado=num_2;
            console.log('el mayor es: ' + resultado);
        }else{
            resultado=num_3;
            console.log('el mayor es: ' + resultado);
        }
    }      
  
