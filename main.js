const displayValorAnterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const buttonNumbers = document.querySelectorAll('.number');
const botonesOperator= document.querySelectorAll('.operator');
//const ButtonOperator = document.querySelectorAll('.operator');

const calculator = new Calculator();
const display = new Display(displayValorActual, displayValorAnterior);
//console.log(calculator.sumar(5,5));

buttonNumbers.forEach(boton => {
    boton.addEventListener('click', ()=>display.agregarNumero(boton.innerHTML));
});

botonesOperator.forEach(boton =>{
    boton.addEventListener('click', ()=>display.computar(boton.value));
})



