const pokemons = [
  { id: 1, name: 'Bulbasaur', types: ['Grass', 'Poison'] },
  { id: 2, name: 'Ivysaur', types: ['Grass', 'Poison'] },
  { id: 3, name: 'Venusaur', types: ['Grass', 'Poison'] },
  { id: 4, name: 'Charmander', types: ['Fire'] },
  { id: 5, name: 'Charmeleon', types: ['Fire'] },
  { id: 6, name: 'Charizard', types: ['Fire', 'Flying'] },
  { id: 7, name: 'Squirtle', types: ['Water'] },
  { id: 8, name: 'Wartortle', types: ['Water'] },
  { id: 9, name: 'Blastoise', types: ['Water'] },
  { id: 10, name: 'Caterpie', types: ['Bug'] },
  { id: 11, name: 'Metapod', types: ['Bug'] },
  { id: 12, name: 'Butterfree', types: ['Bug', 'Flying'] },
  { id: 13, name: 'Weedle', types: ['Bug', 'Poison'] },
  { id: 14, name: 'Kakuna', types: ['Bug', 'Poison'] },
  { id: 15, name: 'Beedrill', types: ['Bug', 'Poison'] },
  { id: 16, name: 'Pidgey', types: ['Normal', 'Flying'] },
  { id: 17, name: 'Pidgeotto', types: ['Normal', 'Flying'] },
  { id: 18, name: 'Pidgeot', types: ['Normal', 'Flying'] },
  { id: 19, name: 'Rattata', types: ['Normal'] },
  { id: 20, name: 'Raticate', types: ['Normal'] },
];

const forEachPokemon = function() {
  pokemons.forEach((pokemon, index) => {
    console.log(`#${index + 1} ${pokemon.name} - ${pokemon.types.join(' / ')}`);
  });
};

console.group('=========== forEachPokemon =========== ');
console.log(forEachPokemon());
// #1 Bulbasaur - Grass / Poison
// #2 Ivysaur - Grass / Poison
// #3 Venusaur - Grass / Poison
// #4 Charmander - Fire
// #5 Charmeleon - Fire
// #6 Charizard - Fire / Flying
// #7 Squirtle - Water
// #8 Wartortle - Water
// #9 Blastoise - Water
// #10 Caterpie - Bug
// #11 Metapod - Bug
// #12 Butterfree - Bug / Flying
// #13 Weedle - Bug / Poison
// #14 Kakuna - Bug / Poison
// #15 Beedrill - Bug / Poison
// #16 Pidgey - Normal / Flying
// #17 Pidgeotto - Normal / Flying
// #18 Pidgeot - Normal / Flying
// #19 Rattata - Normal
// #20 Raticate - Normal
console.groupEnd();

// Add your code here for: filterPokemons
// Use the function expression filterPokemons to return an array of all the Pokémons of that type. 
// The array should be sorted in alphabetical order. 
// Use the array methods filter(), sort(), and map(). The output should be formatted as shown below.
const filterPokemons = function(filterType) {
  return pokemons
    .filter(pokemon => pokemon.types.includes(filterType))
    .map(pokemon => pokemon.name)
    .sort();
};

console.group('=========== filterPokemons =========== ');
console.log(filterPokemons('Fire'));
// [ 'Charizard', 'Charmander', 'Charmeleon' ]
console.log(filterPokemons('Normal'));
// [ 'Pidgeot', 'Pidgeotto', 'Pidgey', 'Raticate', 'Rattata' ]
console.log(filterPokemons('Poison'));
// [ 'Beedrill', 'Bulbasaur', 'Ivysaur', 'Kakuna', 'Venusaur', 'Weedle' ]
console.groupEnd();

// Add your code here for: searchPokemons
//Use the function expression searchPokemons to search based on the name of the Pokémon or its type. 
//Use the array methods filter() and includes(). The search should be case-insensitive.
const searchPokemons = function(searchWord) {
  return pokemons.filter(pokemon => {
    const lowerName = pokemon.name.toLowerCase();
    const lowerTypes = pokemon.types.map(type => type.toLowerCase());
    return lowerName.includes(searchWord.toLowerCase()) || lowerTypes.includes(searchWord.toLowerCase());
  });
};

console.group('=========== searchPokemons =========== ');
console.log(searchPokemons('Wartortle'));
// [ { id: 8, name: 'Wartortle', types: [ 'Water' ] } ]
console.log(searchPokemons('pidgey'));
// [ { id: 16, name: 'Pidgey', types: [ 'Normal', 'Flying' ] } ]
console.log(searchPokemons('bug'));
// [
//   { id: 10, name: 'Caterpie', types: [ 'Bug' ] },
//   { id: 11, name: 'Metapod', types: [ 'Bug' ] },
//   { id: 12, name: 'Butterfree', types: [ 'Bug', 'Flying' ] },
//   { id: 13, name: 'Weedle', types: [ 'Bug', 'Poison' ] },
//   { id: 14, name: 'Kakuna', types: [ 'Bug', 'Poison' ] },
//   { id: 15, name: 'Beedrill', types: [ 'Bug', 'Poison' ] }
// ]
console.groupEnd();

// Add your code here for: reducePokemons
// Use the function expression reducePokemons to return an object with the number of Pokémons of each type. 
// Use the array method reduce().
const reducePokemons = pokemons.reduce((acc, pokemon) => {
  //each pokemon has multiple types
  pokemon.types.forEach(type => {
    //check if it alreaady exists, if not use 0, then add 1 to count this one
    acc[type] = (acc[type] || 0) + 1;
  });
  //return the updated obj
  return acc;

  //where acc starts as an empty object
}, {});

console.group('=========== reducePokemons =========== ');
console.log(reducePokemons);
// {
//   Grass: 3,
//   Poison: 6,
//   Fire: 3,
//   Flying: 5,
//   Water: 3,
//   Bug: 6,
//   Normal: 5
// }
console.groupEnd();
