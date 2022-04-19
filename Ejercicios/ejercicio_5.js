var prompt = require('prompt')

prompt.start();
prompt.get(['num1','num2'] , function (err, result){

    let num1 = parseInt(result.num1)
    let num2 = parseInt(result.num2)
    result= null;

    if(num1 > num2){
        result= num1;
        console.log("resultado: " + result);
    }else{
        result= num2;
        console.log("resultado: " + result);
    }   
});