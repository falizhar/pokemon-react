const baseUrl = 'https://pokeapi.co/api/v2/pokemon';

export const searchPokemon = async (pokemon) => {
  try {
    const url = `${baseUrl}/${pokemon}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemons = async (limit = 20, offset = 0) => {
  try {
    const url = `${baseUrl}?limit=${limit}&offset=${offset}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getPokemonData = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const Colors = {
  grass: '#87c75e',
  poison: '#b84fb9',
  fire: '#eb7471',
  flying: '#7dd3fc',
  water: '#8ac5f8',
  bug: '#70ccb0',
  normal: '#d4d4d4',
  electric: '#ffcf4a',
  ground: '#e1c169',
  fairy: '#FAD9E6',
  fighting: '#c03028',
  psychic: '#f85888',
  rock: '#b7a038',
  steel: '#b8b8d0',
  ice: '#98d9d9',
  ghost: '#715796',
  dragon: '#7138f8',
  dark: '#6e5849',
  unknown: 'FFFDFDFD',
};

export const getPokemonSpecies = async (url) => {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPokemonLocation = async (pokemon) => {
  try {
    const res = await fetch(`${baseUrl}/${pokemon}/encounters`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
