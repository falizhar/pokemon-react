import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokedexContext from '../../Context/GlobalContext';
import PokeBall from '../../Assets/pokeball.jpg';

function SinglePokeCard({ name, id, types }) {
  const { pokemonAbout } = useContext(PokedexContext);
  const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  return (
    <section className="pokeCard">
      <section className="flex justify-between items-center pb-5 pt-8 relative">
        <Link to="/" className="backBg">
          <span className="material-icons-outlined">arrow_back</span>
        </Link>
      </section>
      <figure className="flex flex-col items-center justify-center w-full overflow-hidden">
        <figcaption className="flex flex-col justify-between items-start w-full">
          <div className="flex justify-between items-center w-full">
            <h1 className="capitalize text-3xl font-extrabold tracking-wider">
              {name}
            </h1>
            <span className="font-bold">
              #
              {String(`${id}`).padStart(3, '0')}
            </span>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center">
              {types.map((type, index) => (
                <small
                  key={index}
                  className="my-2 mx-1 rounded-full md:text-base text-sm typeName"
                >
                  {type.type.name}
                </small>
              ))}
            </div>
            <span className="font-medium">
              {pokemonAbout.genera.find((gen) => gen.language.name === 'en')?.genus}
            </span>
          </div>
        </figcaption>
        <div className="relative flex justify-center items-center w-full mt-6">
          <img
            className="relative z-10 w-3/4 -bottom-4"
            src={img}
            alt={name}
          />
          <img className="singleBg" src={PokeBall} alt="Pokeball" />
        </div>
      </figure>
    </section>
  );
}

export default SinglePokeCard;

SinglePokeCard.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  types: PropTypes.array,
};
