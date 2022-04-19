
var prompt = require('prompt')

prompt.start();
prompt.get(['num1'] , function (err, result){

    let num1 = parseInt(result.num1)
    let resultado;

    if(num1 % 2 == 0){
        console.log('Este numero es divisible');
     }else{
        console.log('Este numero es primo');
     }
   }
);


