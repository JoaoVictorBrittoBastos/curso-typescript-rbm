import { API_ROUTES } from "../constants/api.js";
import { env } from "../env.js";

type Filme = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: number;
};

async function start() {
  const filmes = await getFilmes();
  renderizarCards(filmes);
}

async function getFilmes() {
  const request = await fetch(API_ROUTES.baseUrl(env.api_key));
  const response = await request.json();
  return response.results;
}

function renderizarCards(filmes: Filme[]) {
  const containerGridFilmes = document.getElementById("container-grid-filmes") as HTMLDivElement;

  for (let i = 0; i < filmes.length; i++) {
    const card = `<div class="card-filmes">
                  <img id="card-filmes-poster-${filmes[i].id}" src="https://image.tmdb.org/t/p/w400${filmes[i].poster_path}" class="card-filmes-poster" />
                  <div class="card-filmes-info-container">
                  <div class="card-filmes-info-container-header">
                    <h2 id="card-filmes-title-${filmes[i].id}" class="card-filmes-info-title">${filmes[i].title} &nbsp;<span id="card-filmes-nota-${filmes[i].id}">${filmes[i].vote_average}</span></h2>
                  </div>
                  </div>
                  </div>`;

    if (containerGridFilmes) containerGridFilmes.innerHTML += card;
  }
}

start();
