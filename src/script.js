///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ESCREVA SEU CÓDIGO AQUI!!

function Calculadora (numero1, numero2, operador) {

  let num1 = parseFloat(numero1)
  let num2 = parseFloat(numero2)
  let resultado

  switch (operador){
    case "+":
      resultado = num1 + num2
      break;
    case "-":
      resultado = num1 - num2
      break;
    case "*":
      resultado = num1 * num2
      break;
    case "/":
      resultado = num1 / num2
      break;
    case "e":
      if (num2 === 0){
        resultado = 1
        break;
      } else if (num2 === 1){
        resultado = num1
        break;
      } else {
        let i = 0
        resultado = 1
        while (i < num2){
          resultado = resultado * num1
          
          i++
        }
      }
      break;
  }

  if (resultado === "undefined" || resultado > 1000000){
    resultado = "ERRO"
  }

  return resultado
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let visor = document.getElementById("visor");

function adicionar(tecla) {
  visor.value = visor.value + tecla;
}

function limpezatotal() {
  visor.value = "";
}

function calcular() {
  let numeros = visor.value.split(/[^0-9]/)
  let operadores = visor.value.split(/[0-9]/)
  let operador
  operadores.forEach(x => {
    if (x != "")
      operador = x
  });

  visor.value = Calculadora(numeros[0], numeros[1], operador)
}