type Blusa = { id: number; raca: string; Nome: string; preco: number };

const blusas = [
  { id: 1, raca: "Canindé", Nome: "blusa do naruto", preco: 3.5 },
  { id: 2, raca: "Moxotó", Nome: "blusa do one piece", preco: 7.0 },
  { id: 311, raca: "Boer", Nome: "blusa do tokyo ghoul", preco: 12.5 },
  { id: 4, raca: "Anglo Nubiana", Nome: "blusa do jujutsu no kaizen", preco: 1.99 },
  { id: 5, raca: "BHUJ", Nome: "blusa do kimetsu no yaiba", preco: 1.99 },
  { id: 6, raca: "Savanna", Nome: "blusa do boruto", preco: 1.99 },
  { id: 21, raca: "Moxotó", Nome: "blusa do cavalo de fogo", preco: 1.99 },
  { id: 123, raca: "Anglo Nubiana", Nome: "blusa do cavalo de fogo azul", preco: 1.99 },
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
        <h2>${item.Nome}</h2>
        <h3>${item.raca}</h3>
        <h4>${item.preco}</h4>
      </div>
    `;
    });
  }
}

function search() {
  const searchInputValue = (searchInputElement as HTMLInputElement).value;
  const filterTypeValue = (searchTypeElement as HTMLSelectElement).value as "Nome" | "raca";
  const newBlusas = blusas.filter((blusa) => blusa[filterTypeValue].includes(searchInputValue));
  render(newBlusas);
}

function eventListenerHandle() {
  (searchButtonElement as HTMLButtonElement)?.addEventListener("click", search);
}

render(blusas);
eventListenerHandle();