const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const resultsContainer = document.querySelector(".results");

async function getGames() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++) {
            if (i === 8) {
                break;
            }
            resultsContainer.innerHTML += `<div class="result">${"NAME: " + results[i].name + " " + "RATING: " + results[i].rating + " " + "NUMBER OF TAGS: " + results[i].tags.length}</div>`;
        }
    } catch (error) {
        resultsContainer.innerHTML = error;
    }
}

getGames();

