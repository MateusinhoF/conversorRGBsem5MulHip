module.exports = class Converter{

    constructor(json){
        this.formato = json.formato;
        this.red = parseInt(json.red);
        this.green = parseInt(json.green);
        this.blue = parseInt(json.blue);
        this.frase = json.frase;
    }

    createHex(){
        this.red = this.red.toString(16).padStart(2,"0");
        this.green = this.green.toString(16).padStart(2,"0");
        this.blue = this.blue.toString(16).padStart(2,"0");

        this.hexa = '#'+this.red+''+this.green+''+this.blue;
    }

    createHTML(){
        const fs = require('fs');
        //cria o arquivo e baixa ele na pasta onde esta localizado o codigo
        fs.writeFile('frase.html',this.text,(err) => {
            if (err) throw err;
            console.log('arquivo criado');
        });
    }

    createFile(){
        this.createHex();
        this.text = `<p style="color:`+this.hexa+`">`+this.frase+`</p>`;
        this.createHTML();
    }

}