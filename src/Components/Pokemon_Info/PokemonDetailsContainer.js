import React, { lazy, Suspense, useContext } from 'react';
import { useParams } from 'react-router';
import { Navigate } from 'react-router-dom';
import PokedexContext from '../../Context/GlobalContext';
import Dots from '../../Assets/dotted.png';
import { Colors } from '../../Helpers/PokeApi';
import './PokemonDetailsContainer.css';
import Loader from '../Ui/Loader/Loader';

const PokemonDetails = lazy(() => import('./PokemonDetails'));
const SinglePokeCard = lazy(() => import('./SinglePokeCard'));

function PokemonDetailsContainer() {
  const { name } = useParams();

  const { error, singlePokemon } = useContext(PokedexContext);

  if (error || singlePokemon === [] || singlePokemon.types === undefined) return <Navigate to="/" />;

  const mainTypes = Object.keys(Colors);
  const pokeTypes = singlePokemon.types.map((type) => type.type.name);
  const type = mainTypes.find((typeName) => pokeTypes.indexOf(typeName) > -1);
  const color = Colors[type];

  const styleBg = {
    backgroundColor: `${color}`,
  };

  return (
    <main className="detailsContainer" style={styleBg}>
      <img className="dotsBg" src={Dots} alt="Dots background" />
      <Suspense fallback={<Loader />}>
        <SinglePokeCard
          name={name}
          id={singlePokemon.id}
          types={singlePokemon.types}
        />
        <PokemonDetails
          types={singlePokemon.types}
          color={color}
        />
      </Suspense>
    </main>
  );
}

export default PokemonDetailsContainer;
