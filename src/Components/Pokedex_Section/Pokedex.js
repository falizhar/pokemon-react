import React, { useContext, useEffect } from 'react';
import Header from './Header/Header';
import './Pokedex.css';
import Background from '../../Assets/pokeball.jpg';
import PokedexContainer from './Pokémon_List/PokedexContainer';
import PokedexContext from '../../Context/GlobalContext';

function Pokedex() {
  const { isSinglePoke, setSinglePokemon } = useContext(PokedexContext);

  useEffect(() => {
    setSinglePokemon([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="pokedex relative" hidden={!!isSinglePoke}>
      <img className="pokeBg" src={Background} alt="Pokeball bg" />
      <Header />
      <PokedexContainer />
    </section>
  );
}

export default Pokedex;
