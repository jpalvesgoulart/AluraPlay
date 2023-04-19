import { connectApi } from "./apiConnect.js";
import createCard from "./showVideos.js";

async function searchVideo(event) {
    event.preventDefault();

    const searchData = document.querySelector("[data-search]").value;
    const search = await connectApi.searchVideos(searchData);

    const list = document.querySelector("[data-list]")

    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    search.forEach(element => list.appendChild(
        createCard(element.titulo, element.descricao, element.url, element.imagem)))

    if(search.length == 0){
        list.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este termo!</h2>`
    }
}

const searchButton = document.querySelector("[data-search-button]")

searchButton.addEventListener("click", event => searchVideo(event))