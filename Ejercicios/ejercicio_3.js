
var prompt = require('prompt')

prompt.start();

prompt.get(['nombre'], function (err, result){

    console.log("hola " + result.nombre);
});