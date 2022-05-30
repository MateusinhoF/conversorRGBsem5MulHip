const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const handlebars = require('express-handlebars');
const Conversor = require('./converter');

app.engine('handlebars', handlebars.engine({defaultLayout: 'index'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

router.get('/', function(req,res){
    
    res.render('forms');
    
});

router.post('/novorgb', function(req,res){
    
    var errors = [];

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
    }else{
        const conversor = new Conversor(req.body);
        var success = [];
        conversor.createFile();
        success.push({text:'Arquivo criado com sucesso'});
        success.push({frase:conversor.text})
        res.render('forms',{success: success});
    }
        
});

app.use('/', router);
app.listen(process.env.port || 3000);