
var prompt = require('prompt')

prompt.start();
prompt.get(['num1','num2'] , function (err, result){

    let suma = parseInt(result.num1) + parseInt(result.num2)
    console.log("resultado: " + suma);
});