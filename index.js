const note = document.getElementById("note")

const form = document.querySelector('form');
const results = document.querySelector('#results');

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() =>{
    note.innerText = "Search for your..."
    }, 1000 )
    
    setTimeout(() =>{
        note.innerText = "Search for your favourite drinks here!"
        }, 2000 )
        })

        const filterInput = document.querySelector('#filter');
        filterInput.addEventListener('change', () => {
          results.innerHTML = '';
        });


        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const ingredient = document.querySelector('#ingredient').value;
            const filter = document.querySelector('#filter').value;
            let url;
            if (filter) {
              url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${filter}`;
            } else {
              url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${ingredient}`;
        }

        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.drinks === null) {
              results.innerHTML = '<p> No results found </p>';
            } else {
              results.innerHTML = data.drinks.map(drink => {
                return `
                    <div class="cocktail">
                      <img src="${drink.strDrinkThumb}" alt="${drink.strDrink}">
                      <h3>${drink.strDrink}</h3>
                      <p>${drink.strInstructions}</p>
                    </div>
                  `;
              }).join('');
            }
          } catch (error) {
            console.log(error);
            results.innerHTML = '<p> Error Occurred. Check Console</p>';
          }
        });
