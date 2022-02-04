import { printRepos, getSearchString } from './HTMLBuilder';
import { buildURL, } from './github-utils';

export const getGithubRepos = async () => {
    const searchString = getSearchString();
    const url = buildURL(searchString);
    console.log(url);
    const respuesta = await fetch(url);
    const objetos = await respuesta.json();
    printRepos(objetos);
}