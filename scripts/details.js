"use strict";

import { fetchDataFromServer } from "./api.js";
const params = new URLSearchParams(document.location.search);
let animeId = params.get("id");

async function healer() {
    let animeInfo = await fetchDataFromServer(`info/${animeId}`)
    let ai = animeInfo

    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = ai.coverImage.large;

    document.querySelectorAll('meta[property=og\\:image]')[0].setAttribute('content', ai.coverImage.large)

    document.title = `Dojo House - ` + ai.title.userPreferred
    document.getElementById("Name").innerText = ai.title.userPreferred
    document.getElementById("Decription").innerHTML = `<h4>Description</h4>`+ai.description
    document.getElementById("Banner").src = ai.bannerImage
    document.getElementById("Cover").src = ai.coverImage.large
    document.getElementById("YouTube").src = `https://www.youtube.com/embed/`+ai.trailer+`?&theme=dark&color=white&rel=0`
    

    let episodeInfo = await fetchDataFromServer(`episode/${animeId}`)
    let ep = episodeInfo.episodes
    //trending html
    const ep_html = ep.map((d, i) => {
        return `
        <button id="${ep[i].number}" style="flex: 1;" onClick="loadEp('${ep[i].id}','${ep[i].number}')">${ep[i].number}</button>
        `;
    }).join('');
    document.querySelector("#ep").insertAdjacentHTML("afterbegin", ep_html);
    loadEp(`${ep[0].id}`,`${ep[0].number}`)
}healer()



