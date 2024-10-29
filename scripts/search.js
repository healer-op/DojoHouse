async function search() {
    let query = document.getElementById("source").value;
    document.getElementById("AnimeT").innerHTML = `<h3>Results for ... ${query}</h3>`
    let search = await (await fetch(`https://amvstrm-api-olive.vercel.app/api/v2/search?q=${encodeURIComponent(query)}`)).json();

    let td = search.results
    document.getElementById("Trending").innerHTML = ""

    const trending_html = td.map((d, i) => {
        return `
        <div style="flex: 1; padding: 10px;">
            <center>
                <img src="${td[i].coverImage.extraLarge}" width="150px">
                <a href="./details.html?id=${td[i].id}">${td[i].title.userPreferred}</a>
            </center>
        </div>`;
    }).join('');
    document.querySelector("#Trending").insertAdjacentHTML("afterbegin", trending_html);
    document.getElementById("loadMore").style.display = "none"
}

const inputHandler = async function (e) {
    search()

}

const source = document.getElementById('source');
source.addEventListener('input', inputHandler);
source.addEventListener('propertychange', inputHandler)
