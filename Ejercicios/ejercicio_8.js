
var prompt = require('prompt')

prompt.start();
prompt.get(['num1'] , function (err, result){

    let num1 = parseInt(result.num1)
    let resultado;

    for (let index = 2; index < num1 / 2; index++) {
        if(num1 % index == 0){
            resultado = num1;
            console.log('es dividible: ' + resultado);
        }
}
   }
);
