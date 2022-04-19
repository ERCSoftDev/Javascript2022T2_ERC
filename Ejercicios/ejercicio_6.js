var prompt = require('prompt')

prompt.start();
prompt.get(['num1','num2','num3'] , function (err, result){

    let num1 = parseInt(result.num1)
    let num2 = parseInt(result.num2)
    let num3 = parseInt(result.num3)
    let resultado;

    if(num1 > num2 && num1 > num3){
        resultado=num1;
        console.log('el mayor es: ' + resultado);
        }else{
            if(num2 > num1 && num2 > num3){
                resultado=num2;
                console.log('el mayor es: ' + resultado);
             }else{
                resultado=num3;
                console.log('el mayor es: ' + resultado);
            }
        }    
    }
);

