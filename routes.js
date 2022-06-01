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
    }
    next();
});

router.post('/novorgb', function(req,res){
    
    
/*
    if(req.body.red == '' || req.body.red < 0 || req.body.red > 255 || isNaN(parseInt(req.body.red))){
        errors.push({text: "Valor inválido no RED"});
    }
    if(req.body.green == '' || req.body.green < 0 || req.body.green > 255 || isNaN(parseInt(req.body.green))){
        errors.push({text: "Valor inválido no GREEN"});
    }
    if(req.body.blue == '' || req.body.blue < 0 || req.body.blue > 255 || isNaN(parseInt(req.body.blue))){
        errors.push({text: "Valor inválido no BLUE"});
    }
    if(req.body.frase == ''){
        errors.push({text: "Digite um valor na frase"});
    }

    if(errors.length>0){
        res.render('forms',{errors: errors});
    }else{*/
        const converter = new Converter(req.body);
        var success = [];
        converter.createFile();
        success.push({text:'Arquivo criado com sucesso'});
        success.push({frase:converter.text})
        res.render('forms',{success: success});
    //}
        
});

module.exports = router;