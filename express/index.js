const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
});

app.listen(3000)
console.log("express esta corriendo por el puerto: 3000")