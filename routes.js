const express = require('express');
const router = express.Router();
const Converter = require('./converter/Converter');
const Verificator = require('./verify/Verificator');

let errors = [];
let success = [];

router.get('/', function(req,res){
    
    res.render('forms');
    
});

router.use(function(req,res,next){
    const verify = new Verificator(req.body);
    verify.verify();
    errors = verify.errors;
    next();
    
});

router.post('/novorgb', function(req,res){
    
    if (errors.length === 0){
        const converter = new Converter(req.body);
        converter.createFile();
        success.push({text:'Arquivo criado com sucesso'});
        success.push({frase:converter.text});
    }
    res.render('forms',{ success: success, errors: errors });
        
});

module.exports = router;