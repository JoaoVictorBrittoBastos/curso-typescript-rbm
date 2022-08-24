import { API_ROUTES } from "../constants/api.js";
import { env } from "../env.js";

type Filme = {
  id: number;
  nome: string;
  nota: number;
  poster: string;
};

let filmes = [];

async function getFilmes() {
  const request = await fetch(API_ROUTES.baseUrl(env.api_key));
  const response = await request.json();
  console.log(response);
}

function renderizarCards(filmes: Filme[]) {
  const containerGridFilmes = document.getElementById("container-grid-filmes") as HTMLDivElement;

  for (let i = 0; i < filmes.length; i++) {
    const card = `<div class="card-filmes">
                  <img id="card-filmes-poster-${filmes[i].id}" src="${filmes[i].poster}" class="card-filmes-poster" />
                  <div class="card-filmes-info-container">
                  <div class="card-filmes-info-container-header">
                    <h2 id="card-filmes-title-${filmes[i].id}" class="card-filmes-info-title">${filmes[i].nome} &nbsp;<span id="card-filmes-nota-${filmes[i].id}">${filmes[i].nota}</span></h2>
                  </div>
                  </div>
                  </div>`;

    if (containerGridFilmes) containerGridFilmes.innerHTML += card;
  }
}

getFilmes();
