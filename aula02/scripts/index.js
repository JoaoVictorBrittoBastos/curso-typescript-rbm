var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { API_ROUTES } from "../constants/api.js";
import { env } from "../env.js";
let filmes = [];
function getFilmes() {
    return __awaiter(this, void 0, void 0, function* () {
        const request = yield fetch(API_ROUTES.baseUrl(env.api_key));
        const response = yield request.json();
        console.log(response);
    });
}
function renderizarCards(filmes) {
    const containerGridFilmes = document.getElementById("container-grid-filmes");
    for (let i = 0; i < filmes.length; i++) {
        const card = `<div class="card-filmes">
                  <img id="card-filmes-poster-${filmes[i].id}" src="${filmes[i].poster}" class="card-filmes-poster" />
                  <div class="card-filmes-info-container">
                  <div class="card-filmes-info-container-header">
                    <h2 id="card-filmes-title-${filmes[i].id}" class="card-filmes-info-title">${filmes[i].nome} &nbsp;<span id="card-filmes-nota-${filmes[i].id}">${filmes[i].nota}</span></h2>
                  </div>
                  </div>
                  </div>`;
        if (containerGridFilmes)
            containerGridFilmes.innerHTML += card;
    }
}
getFilmes();
