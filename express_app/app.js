var express = require('express');
var path = require('path');
var fs = require('fs')
var app = express();
var router = require('./index');
app.use('/router',router);
var path1 = 'testfile.txt'
app.post('/',function(req,res){
    res.send('hi, this is post operation for display this msg');
    console.log('this is post method');
})
//file operations..........//
app.get('/',function(req,res){
    // res.send('welcome');
    console.log('attachment file');
    res.download('testfile.txt');
})
//send file//
app.get('/home',function(req,res){
    res.sendfile(path1);
    console.log('welcome to the homepage');
    console.log('send file successfully');
})
app.get('/sendfile',function(req,res){
    res.sendFile(path.join(__dirname + '/testfile.txt'))
    console.log('using path to get file....');
})
// read file with error handling...//
app.get('/readfile',function(req,res,next){
    fs.readFile('testfile.txt',function(err,data){
        if(!err){
            res.send(data);
            console.log('read a file successfully');
        }
        else{
            res.redirect(200,'http://localhost:3000/about');
            console.log('error found');
            next(err);
        }
    });
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

// app.get('/:name/:id',function(req,res){
//     res.send('print router name and id.....id: '+req.params.id+' name: '+req.params.name);
//     console.log('router name and id:'+req.params.name+' and '+req.params.id);
// })
app.listen(3000);