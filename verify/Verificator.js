module.exports = class Verificator{


    constructor(bodyReq){
        this.bodyReq = bodyReq;
        this.errors = [];
    }

    verifyRed() {
        if(this.bodyReq.red == '' || this.bodyReq.red < 0 || this.bodyReq.red > 255 || isNaN(parseInt(this.bodyReq.red))){
            this.errors.push({text: "Valor inválido no RED"});
        }
    }

    verifyGreen(){
        if(this.bodyReq.green == '' || this.bodyReq.green < 0 || this.bodyReq.green > 255 || isNaN(parseInt(this.bodyReq.green))){
            this.errors.push({text: "Valor inválido no GREEN"});
        }
    }

    verifyBlue(){
        if(this.bodyReq.blue == '' || this.bodyReq.blue < 0 || this.bodyReq.blue > 255 || isNaN(parseInt(this.bodyReq.blue))){
            this.errors.push({text: "Valor inválido no BLUE"});
        }
    }

    verifyPhrase(){
        if(this.bodyReq.frase == '' || this.bodyReq.frase.trim()==''){
            this.errors.push({text: "Digite uma frase"});
        }
    }

    verify(){
        this.verifyRed();
        this.verifyGreen();
        this.verifyBlue();
        this.verifyPhrase();
    }
}