const pokemonColors = {
  normal: '#A8A77A',
  fire: '#EE8130',
  water: '#6390F0',
  electric: '#F7D02C',
  grass: '#7AC74C',
  ice: '#96D9D6',
  fighting: '#C22E28',
  poison: '#ea7ce8',
  ground: '#E2BF65',
  flying: '#A98FF3',
  psychic: '#F95587',
  bug: '#A6B91A',
  rock: '#B6A136',
  ghost: '#735797',
  dragon: '#6F35FC',
  dark: '#705746',
  steel: '#B7B7CE',
  fairy: '#D685AD',
};

// Add your code here
//DOM elements
const loader = document.getElementById('loader');
const loaderText = document.getElementById('loader-text');
const container = document.getElementById('pokemon-container');
const search = document.getElementById('search');

// store all fetched pokemons so we can search through them later
const allPokemons = [];

//get 25 pokemon
const fetchPokemons = function() {
  fetch('https://pokeapi.co/api/v2/pokemon?limit=25')
    .then(response => response.json())
    .then(data => {
      // data.results: list of 25 pokemons with just name and url
      // we need to fetch each individually to get the image & types
      const promises = data.results.map(pokemon => fetch(pokemon.url).then(res => res.json()));
      return Promise.all(promises);
    })
    .then(pokemons => {
      // hide the loader after
      loader.style.display = 'none';
      loaderText.style.display = 'none';

      //Store & display each pokemon
      pokemons.forEach(pokemon => {
        allPokemons.push(pokemon);
        createCard(pokemon);
      });
    });
};

//build and append card into container for single pokemon
const createCard = function(pokemon) {
  const card = document.createElement('div');
  card.classList.add('pokemon-card');

  const name = document.createElement('h3');
  name.textContent = pokemon.name;

  //make pokemon picture
  const img = document.createElement('img');
  img.src = pokemon.sprites.front_default;
  img.alt = pokemon.name;

  //create div for type badges
  const typesDiv = document.createElement('div');
  pokemon.types.forEach(typeInfo => {
    const typeSpan = document.createElement('span');
    typeSpan.textContent = typeInfo.type.name;
    //from color dictonary
    typeSpan.style.backgroundColor = pokemonColors[typeInfo.type.name];
    typeSpan.classList.add('type-badge');
    typesDiv.appendChild(typeSpan);
  });

  //put it togther
  card.appendChild(name);
  card.appendChild(img);
  card.appendChild(typesDiv);
  container.appendChild(card);
};

//every time they release a letter
search.addEventListener('keyup', function() {
  const searchWord = search.value.toLowerCase();
  
  //clear container before showing filtered results
  container.innerHTML = '';

  // filter the pokemons we already fetched
  const filtered = allPokemons.filter(pokemon => 
    pokemon.name.toLowerCase().includes(searchWord) ||
    pokemon.types.some(typeInfo => typeInfo.type.name.toLowerCase().includes(searchWord))
  );

  //if nothing matched let us know
  if (filtered.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No Pokemon matched your search';
    message.style.color = 'white';
    container.appendChild(message);
  } else {
    filtered.forEach(pokemon => createCard(pokemon));
  }
});

//main
fetchPokemons();
