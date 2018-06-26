var express = require('express');
var router = express.Router();
console.log('start.....');
//methods//
router.get('/',function(req,res){
    res.send('welcome to the router page');
    console.log('greeting from get method');
})
router.post('/',function(req,res){
    res.send('this is post method, used to create values');
    console.log('msg from post method');
})
router.put('/',function(req,res){
    res.send('this is put method, used to update values');
    console.log('msg from put method');
})
router.delete('/',function(req,res){
    res.send('this is delete method, used to delete values');
    console.log('msg from delete method');
})
//get method using regex //
router.get('/user/:id([1-9]{4})',function(req,res){
    res.send('use regex to access router randomly......id: '+req.params.id);
    console.log('random router id:',req.params.id);
})
//there is no match then it will run //
router.get('*',function(req,res){
     res.send('invalid user id:'+req.params.id);
     console.log('invalid router id');
})
//regex for string //
router.get('/ab?cd',function(req,res){
    res.send('regex use to access path using ?operator');
    console.log('regex operation using(?) ');
})
router.get('/ab+cd',function(req,res){
    res.send('regex use to access path with + operator');
    console.log('regex operation using(+)');
})
router.get('/ab*cd',function(req,res){
    res.send('regex use to access path using * operator');
    console.log('regex operation using(*)');
})
router.get('/a+b?cd',function(req,res){
    res.send('regex use to access path using + and ?operators');
    console.log('regex operation using(+,?)');
})
router.get('/a+',function(req,res){
    res.send('regex use to access path using + operator with a value');
    console.log('regex operation using one letter with +operator');
})
router.get('/bavani+*',function(req,res){
    res.send('regex use to access path using +*');
    console.log('regex operation using(+*)');
})
router.get('/ab(bavani)?cd',function(req,res){
    res.send('regex use to access path using ? with name ');
    console.log('regex operation using((),?)');
})
router.get('/bavasai/',function(req,res){
    res.send('regex used to match value(like,/bava/)');
    console.log('regex operation using(/bava/) to match value');
})
// filters //
var value1 = function(req,res,next){
    res.send('value1 function...');
    console.log('value1');
}
var value2 = function(req,res,next){
    res.send('value2 function...');
    console.log('value2');
}
router.get('/values/no',[value2,value1]);//here 1st value only displayed//

// router.get('/user/:name([a-zA-Z]+{6})',function(req,res){
//     res.send('use regex to give random name to the router......name: '+req.params.name);
//     console.log('random name:',req.params.name);
// })
module.exports = router;