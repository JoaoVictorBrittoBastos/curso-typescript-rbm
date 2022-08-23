const resultado = document.getElementById("resultado");
const numero1: HTMLElement | null = document.getElementById("numero1");
const numero2: HTMLElement | null = document.getElementById("numero2");
const calcularBotao = document.getElementById("calcular");
const containerResultado = document.getElementById("container-resultado");

const botoesOperadores = Array.from(document.querySelectorAll(".operador-button")) as HTMLButtonElement[];

botoesOperadores.forEach((botao) => {
  botao.addEventListener("click", () => renderizarResultado(botao.dataset.value));
});

function calcular(operador: "+" | "-" | "*" | "/" | string | undefined) {
  const valor1 = parseInt((numero1 as HTMLInputElement).value);
  const valor2 = parseInt((numero2 as HTMLInputElement).value);
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

function renderizarResultado(operador: "+" | "-" | "*" | "/" | string | undefined) {
  const resultValue = document.createElement("p");

  resultValue.innerText = calcular(operador).trim();
  containerResultado?.appendChild(resultValue);
}
