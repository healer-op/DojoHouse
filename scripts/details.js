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

    try {
        link.href = ai.coverImage.large;
        document.querySelectorAll('meta[property=og\\:image]')[0].setAttribute('content', ai.coverImage.large)
    } catch (error) {
        console.log(error)
    }
    

    
    try {
        document.title = `Dojo House - ` + ai.title.userPreferred
    } catch (error) {
        console.log(error)
    }
    try {
        document.getElementById("Name").innerText = ai.title.userPreferred
    } catch (error) {
        console.log(error)
    }
    try {
        document.getElementById("Decription").innerHTML = `<h4>Description</h4>`+ai.description
    } catch (error) {
        console.log(error)
    }
    try {
        document.getElementById("Banner").src = ai.bannerImage 
    } catch (error) {
        console.log(error)
    }
    try {
        document.getElementById("Cover").src = ai.coverImage.large   
    } catch (error) {
        console.log(error)
    }
    

    try {
        document.getElementById("YouTube").src = `https://www.youtube.com/embed/${ai.trailer.id}`
    } catch (error) {
        console.log(error)
    }
    
    let idProviders = []
    let idProvidersName = []
    idProviders.push(ai.id_provider.idGogo)
    idProvidersName.push("Sub")
    try {
        idProviders.push(ai.id_provider.idGogoDub)
        idProvidersName.push("Dub")
    } catch (error) {
        console.log(error)
    }

    const p_html = idProviders.map((d, i) => {
        return `
        <option value="${idProviders[i]}">${idProvidersName[i]}</option>
        `;
    }).join('');
    document.querySelector("#dub").insertAdjacentHTML("afterbegin", p_html);


    loadEpList()
}healer()



