var express = require('express');
var app = express();
var router = require('./index');
app.use('/router',router);
app.post('/',function(req,res){
    res.send('hi, this is post operation for display this msg');
    console.log('this is post method');
})
app.get('/',function(req,res){
    res.send('welcome');
})

app.get('/home',function(req,res){
    res.send('welcome to the homepage');
    console.log('home page....');
})
app.get('/about',function(req,res){
    res.send('about page');
    console.log('About page is used to get details');
})
//common operation//
app.all('/general',function(req,res){
    res.send('this is the common for all methods');
    console.log('common operation....');
})
//use regex Id//
app.get('/:id([1-9]{4})',function(req,res){
    res.send('this get method used to access id router.....id: '+req.params.id);
    console.log('router id:',req.params.id);
})
//used to print router name and id// 
// app.get('/:name/:id',function(req,res){
//     res.send('print router name and id.....id: '+req.params.id+' name: '+req.params.name);
//     console.log('router name and id:'+req.params.name+' and '+req.params.id);
// })
app.listen(3000);