"use strict";
const resultado = document.getElementById("resultado");
const numero1 = document.getElementById("numero1");
const numero2 = document.getElementById("numero2");
const calcularBotao = document.getElementById("calcular");
const containerResultado = document.getElementById("container-resultado");
const botoesOperadores = Array.from(document.querySelectorAll(".operador-button"));
botoesOperadores.forEach((botao) => {
    botao.addEventListener("click", () => renderizarResultado(botao.dataset.value));
});
function calcular(operador) {
    const valor1 = parseInt(numero1.value);
    const valor2 = parseInt(numero2.value);
    if (valor1 && valor2) {
        switch (operador) {
            case "+":
                return (valor1 + valor2).toFixed(2).toString();
            case "-":
                return (valor1 - valor2).toFixed(2).toString();
            case "*":
                return (valor1 * valor2).toFixed(2).toString();
            case "/":
                return (valor1 / valor2).toFixed(2).toString();
            default:
                return "";
        }
    }
    return "";
}
function renderizarResultado(operador) {
    const resultValue = document.createElement("p");
    resultValue.innerText = calcular(operador).trim();
    containerResultado === null || containerResultado === void 0 ? void 0 : containerResultado.appendChild(resultValue);
}
