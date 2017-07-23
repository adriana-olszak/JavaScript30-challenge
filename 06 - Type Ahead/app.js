const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const searchInput = document.querySelector('.search');
const suggestionsList = document.querySelector('.suggestions');
const cities = [];

fetch(endpoint)
    .then((response) => response.json())
    .then((data) => cities.push(...data));

function findMatches(needle, cities) {
    return cities.filter(place => {
        const findPhrase = new RegExp(needle, 'gi');
        return place.city.match(findPhrase) || place.state.match(findPhrase)
    })
}

function displayMatches() {
    const matchedArray = findMatches(this.value, cities);
    suggestionsList.innerHTML = matchedArray.map(element => {
        const regex = new RegExp(this.value, 'gi');
        const city = element.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const state = element.state.replace(regex, `<span class="hl">${this.value}</span>`);
        const population = Number(element.population).toLocaleString('en-EN');

        return `
            <li>
              <span class="name">${city}, ${state}</span>
              <span class="population">${population}</span>
            </li>`;

    }).join('');
}


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
