class Display{
    constructor(displayValorAnterior, displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.tipoOperacion = undefined;
        this.calculadora = new Calculator();
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            sumar:'+',
            restar: '-',
            multiplicar : 'x',
            dividir : '/'
        };
    }
    agregarNumero(numero){
        if(numero === '.' && this.valorActual.includes('.')){
            return
        }else{
            this.valorActual = this.valorActual.toString() +numero;
        }
        this.imprimirValores();
    }
    borrarTodo(){
        this.valorActual= "";
        this.valorAnterior="";
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);
        this.imprimirValores();
        
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual ="";
        this.imprimirValores();
    }

    imprimirValores(){
        displayValorActual.textContent = this.valorActual;
        displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ""}` ;
    }
    calcular(){
        const valorAnterior = parseFloat(this.valorAnterior);
        const valorActual = parseFloat(this.valorActual);

        if(isNaN(valorAnterior) || isNaN(valorActual)) return
        this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual);
    }
    
}