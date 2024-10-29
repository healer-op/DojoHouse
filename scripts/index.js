"use strict";

import { fetchDataFromServer } from "./api.js";

async function healer() {
    let trending = await fetchDataFromServer('popular')
    let td = trending.results;
    //trending html
    const trending_html = td.map((d, i) => {
        return `
        <div style="flex: 1; padding: 10px;">
            <center>
                <img src="${td[i].coverImage.extraLarge}" width="150px"><br>
                <a href="/DojoHouse/details.html?id=${td[i].id}">${td[i].title.userPreferred}</a>
            </center>
        </div>`;
    }).join('');
    document.querySelector("#Trending").insertAdjacentHTML("afterbegin", trending_html);
}healer()
