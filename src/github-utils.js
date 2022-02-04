const BASE_URL = 'https://api.github.com/';

export const buildURL = (searchString) => {
    let querySearch = `${searchString}in:name`;
    querySearch = encodeURIComponent(querySearch);
    return `${BASE_URL}search/repositories?per_page=5&q=${querySearch}`;
}