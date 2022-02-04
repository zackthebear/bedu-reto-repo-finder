const appHTML = document.getElementById("app");

export const initBuilder = (callback) => {
    const components = `
        <div class='container'>
            <div class='row'> <h1>Repo Finder<h1> </div>
            <div class='row'>
                <input id='busqueda' class='input' type='text'/>
                <button class='btn' id='submit'>Buscar</button>
            </div>
            <div id='reposContainer' class='row'>

            </div>
        </div>
    `;
    appHTML.innerHTML = components;

    const button = document.getElementById("submit");
    const searchInput = document.getElementById("busqueda");

    searchInput.addEventListener('keyup', (evt) => {
        const key = evt.key || evt.keyCode;
        if(key === 13){
            callback();
        }
    });
    button.addEventListener('click', callback);
}

export const getSearchString = () => {
    const searchInput = document.getElementById("busqueda");
    return searchInput.value;
}


export const printRepos = (repos) => {
    const { items } = repos;
    let htmlOutput = '<ul>';
    items.map((repo) => {
        console.log(repo);
        const { name, description, html_url, language } = repo;

        htmlOutput += `
        <li class='row'>
            <h4>${name}</h4>
            <p>${description}</p>
            <a href='${html_url}'> Go to repo </a>
            <p> Language: <b>${language}</b> </p>
        </li>
        `
    });
    htmlOutput += '</li>';

    const containerRepos = document.getElementById("reposContainer");
    containerRepos.innerHTML = htmlOutput;
}