const express = require('express');

let app = express();

app.get('/',(req,res)=>{
    res.send('Hello World!');
});

app.get('/bad',(req,res)=>{
    res.status(404).send({
        error:'Page not found.'
    })
});

app.get('/users',(req,res)=>{
    res.send({
        name:'Rahul',
        age:25,
        location:'bangalore'
    });
});

// to test express we need super test library its visionmedia which is developed by engineer who developed express to test it
app.listen(3000,()=>{
    console.log('server is up and running')
});

module.exports.app = app;