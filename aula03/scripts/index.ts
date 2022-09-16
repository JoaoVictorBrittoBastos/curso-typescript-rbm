type Blusa = { id: number; marca: string; modelo: string; preco: number };

const blusas = [
  { id: 1, marca: "lacosta", modelo: "blusa do naruto", preco: 3.5 },
  { id: 2, marca: "lafrente", modelo: "blusa do one piece", preco: 7.0 },
  { id: 311, marca: "ardidas", modelo: "blusa do tokyo ghoul", preco: 12.5 },
  { id: 4, marca: "puma", modelo: "blusa do jujutsu no kaizen", preco: 1.99 },
  { id: 5, marca: "calvo cleide", modelo: "blusa do kimetsu no yaiba", preco: 1.99 },
  { id: 6, marca: "pia", modelo: "blusa do boruto", preco: 1.99 },
  { id: 21, marca: "cavalera", modelo: "blusa do cavalo de fogo", preco: 1.99 },
  { id: 123, marca: "reserva", modelo: "blusa do cavalo de fogo azul", preco: 1.99 },
];

const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("#search-button");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchTypeElement = document.querySelector("#filter-type-select");

function render(itens: Blusa[]) {
  if (rootElement) {
    rootElement.innerHTML = "";
    itens.forEach((item) => {
      rootElement.innerHTML += `
      <div class="item-wrapper">
        <h2>${item.modelo}</h2>
        <h3>${item.marca}</h3>
        <h4>${item.preco}</h4>
      </div>
    `;
    });
  }
}

function search() {
  const searchInputValue = (searchInputElement as HTMLInputElement).value;
  const filterTypeValue = (searchTypeElement as HTMLSelectElement).value as "modelo" | "marca";
  const newBlusas = blusas.filter((blusa) => blusa[filterTypeValue].includes(searchInputValue));
  render(newBlusas);
}

function eventListenerHandle() {
  (searchButtonElement as HTMLButtonElement)?.addEventListener("click", search);
}

render(blusas);
eventListenerHandle();
