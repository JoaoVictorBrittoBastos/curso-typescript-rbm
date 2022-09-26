"use strict";
const Cabras = [
    { id: 1, raca: "Canindé", img: "./imagens/caninde.jpg", Nome: "Benito de Paula", desc: "Bode de defesa", desc2: "Essa raça lhe dá segurança para apostar alto no truco, fazendo com que se o usuário perder ele só perderá o valor inicial da aposta.", preco: 2500.00 },
    { id: 2, raca: "Moxotó", img: "./imagens/moxoto.jpg", Nome: "Amarelão", desc: "Bode de ataque", desc2: "Essa raça lhe dá oportunidade para dobrar a aposta no truco a qualquer momento, fazendo com que o dinheiro da aposta aumente na mesa.", preco: 7000.0 },
    { id: 3, raca: "Boer", img: "./imagens/boer.jpg", Nome: "Zeus", desc: "Bode de defesa", desc2: "Essa raça lhe dá segurança para apostar alto no truco, fazendo com que se o usuário perder ele só perderá o valor inicial da aposta", preco: 3000.50 },
    { id: 4, raca: "Anglo Nubiana", img: "./imagens/anglo1.jpg", Nome: "Ronaldo", desc: "Bode de ataque", desc2: "Essa raça lhe dá oportunidade para dobrar a aposta no truco a qualquer momento, fazendo com que o dinheiro da aposta aumente na mesa.", preco: 5000.00 },
    { id: 5, raca: "BHUJ", img: "./imagens/bhuj.jpg", Nome: "Camilo", desc: "Bode de defesa", desc2: "Essa raça lhe dá segurança para apostar alto no truco, fazendo com que se o usuário perder ele só perderá o valor inicial da aposta", preco: 2678.99 },
    { id: 6, raca: "Savanna", img: "./imagens/savana.png", Nome: "Fency", desc: "Bode de ataque", desc2: "Essa raça lhe dá oportunidade para dobrar a aposta no truco a qualquer momento, fazendo com que o dinheiro da aposta aumente na mesa.", preco: 7260.00 },
    { id: 7, raca: "Moxotó", img: "./imagens/moxoto2.jpg", Nome: "Catuaba", desc: "Bode de ataque", desc2: "Essa raça lhe dá oportunidade para dobrar a aposta no truco a qualquer momento, fazendo com que o dinheiro da aposta aumente na mesa.", preco: 1500.00 },
    { id: 8, raca: "Anglo Nubiana", img: "./imagens/anglo2.jpg", Nome: "Azulão", desc: "Bode de defesa", desc2: "Essa raça lhe dá segurança para apostar alto no truco, fazendo com que se o usuário perder ele só perderá o valor inicial da aposta", preco: 4500.00 },
];
const rootElement = document.querySelector("#root");
const searchButtonElement = document.querySelector("#search-button");
const searchInputElement = document.querySelector("#input-pesquisar");
const searchTypeElement = document.querySelector("#filter-type-select");
const searchValType = document.querySelector("#filter-price");
console.log(searchValType);
// const cardTypeElement = Array.from(document.querySelectorAll(".item-wraper")); 
function render(itens) {
    if (rootElement) {
        rootElement.innerHTML = "";
        itens.forEach((item) => {
            rootElement.innerHTML += `
      <div class="card">
        <div class="item-wrapper" id = ${item.id} >
          <img src="${item.img}" width="250px" height="300px">
        </div>
        <div class="back">
          <div>
          <h2>Nome: ${item.Nome}</h2>
          <h4>Raça: ${item.raca}</h3>
          <h4>R$ ${item.preco}</h4>
          </div>
        </div>    
      </div>
    `;
        });
    }
}
// function carrega((onclick) => {
// });
function price() {
    const valorSelect = searchValType.value;
    console.log(valorSelect);
    let newCabras = Cabras;
    if (valorSelect === "MenorPreco") {
        newCabras = (newCabras.sort(function (a, b) {
            if (a.preco > b.preco) {
                console.log(a, b);
                return 1;
            }
            if (a.preco < b.preco) {
                return -1;
            }
            // a must be equal to b
            return 0;
        }));
    }
    if (valorSelect === "MaiorPreco") {
        newCabras = (newCabras.sort(function (a, b) {
            if (a.preco < b.preco) {
                console.log(a, b);
                return 1;
            }
            if (a.preco > b.preco) {
                return -1;
            }
            // a must be equal to b
            return 0;
        }));
    }
    if (valorSelect === "Nada") {
        window.location.reload();
    }
    render(newCabras);
}
function search() {
    const searchInputValue = searchInputElement.value;
    const filterTypeValue = searchTypeElement.value;
    const newCabras = Cabras.filter((cabra) => cabra[filterTypeValue].includes(searchInputValue));
    render(newCabras);
}
function eventListenerHandle() {
    searchButtonElement === null || searchButtonElement === void 0 ? void 0 : searchButtonElement.addEventListener("click", search);
    searchValType === null || searchValType === void 0 ? void 0 : searchValType.addEventListener("change", price);
    // (cardTypeElement as HTMLDivElement[])?.forEach((e) =>{
    //   e.addEventListener("click", evento(Cabras));
    // })
}
render(Cabras);
eventListenerHandle();
