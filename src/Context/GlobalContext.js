import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPokemonData, getPokemons } from '../Helpers/PokeApi';

const PokedexContext = createContext();

function PokedexProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const [singlePokemon, setSinglePokemon] = useState([]);
  const [pokemonAbout, setPokemonAbout] = useState([]);
  const [pokeLocation, setPokeLocation] = useState([]);
  const [pokeTypeDefense, setPokeTypeDefense] = useState([]);
  const [evolChain, setEvolChain] = useState([]);
  const [evolFrom, setEvolFrom] = useState([]);

  const [offset, setOffset] = useState(0);
  const [prevOffset, setPrevOffset] = useState(0);

  const isSinglePoke = window.location.href.indexOf('Pokemon') > -1;

  const handleScrollPosition = () => {
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
      window.scrollTo(0, parseInt(scrollPosition, 10));
      sessionStorage.removeItem('scrollPosition');
    }
  };

  const handleScroll = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled >= scrollable - (scrollable / 6)) setOffset(offset + 20);
  };

  const handleUpdateList = (results) => {
    const result = [...new Set(results)];
    if (!isSinglePoke) {
      setAllPokemons(((prev) => (allPokemons.length > 1 && prev !== result && offset > 1
        ? [...prev, ...result]
        : result)
      ));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemons(20, offset);
      // eslint-disable-next-line no-return-await
      const promises = data.results.map((pokemon) => getPokemonData(pokemon.url));
      const results = await Promise.all(promises);
      // eslint-disable-next-line max-len,no-unused-expressions
      handleUpdateList(results);
      handleScrollPosition();
      setLoading(false);
      setPrevOffset(offset);
    };

    if ((!isSinglePoke && offset === 0) || (offset > 0 && prevOffset !== offset)) fetchData();
    window.addEventListener('scroll', handleScroll);
    if (isSinglePoke) window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset, isSinglePoke]);

  const data = {
    loading,
    setLoading,
    error,
    setError,
    allPokemons,
    setAllPokemons,
    singlePokemon,
    setSinglePokemon,
    pokemonAbout,
    setPokemonAbout,
    pokeLocation,
    setPokeLocation,
    pokeTypeDefense,
    setPokeTypeDefense,
    setEvolChain,
    evolChain,
    setEvolFrom,
    evolFrom,
    offset,
    setOffset,
    isSinglePoke,
  };

  return (
    <PokedexContext.Provider value={data}>
      {children}
    </PokedexContext.Provider>
  );
}

export { PokedexProvider };
export default PokedexContext;

PokedexProvider.propTypes = {
  children: PropTypes.any,
};
