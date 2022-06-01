const express = require('express');
const router = express.Router();
const Converter = require('./converter/Converter');
const Verificator = require('./verify/Verificator');

let errors = [];

router.get('/', function(req,res){
    
    res.render('forms');
    
});

router.use(function(req,res,next){
    const verify = new Verificator(req.body);
    verify.verify();
    errors = verify.errors;
    if (errors){
        res.render('forms',{errors: errors});
    }else{
        next();
    }
});

router.post('/novorgb', function(req,res){
    
    console.log('teste')
    const converter = new Converter(req.body);
    var success = [];
    converter.createFile();
    success.push({text:'Arquivo criado com sucesso'});
    success.push({frase:converter.text})
    res.render('forms',{success: success});

        
});

module.exports = router;