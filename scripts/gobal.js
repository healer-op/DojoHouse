async function Home(){
    let location = window.location.href
    location = location.substring(0, location.lastIndexOf("/") + 1);
    window.location.href = location
}

async function LoadMore() {
    document.getElementById("loading").style.display = 'block';
    let index = document.getElementById("number").innerText;
    index = parseInt(index)

    let search = await (await fetch(`https://amvstrm-api-olive.vercel.app/api/v2/popular?p=${index}`)).json();
    let td = search.results
    const trending_html = td.map((d, i) => {
        return `
        <div style="flex: 1; padding: 10px;">
            <center>
                <img src="${td[i].coverImage.extraLarge}" width="150px">
                <a href="./details.html?id=${td[i].id}">${td[i].title.userPreferred}</a>
            </center>
        </div>`;
    }).join('');
    document.querySelector("#Trending").insertAdjacentHTML("beforeend", trending_html);
    document.getElementById("number").innerText = `${index + 1}`
    setTimeout(() => {
        document.getElementById("loading").style.display = 'none';
    }, 200);
    
}
