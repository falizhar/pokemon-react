import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import PokeBall from '../../../Assets/pokeball.jpg';
import PokedexContext from '../../../Context/GlobalContext';
import { Colors, getPokemonSpecies, searchPokemon } from '../../../Helpers/PokeApi';

const PokemonCard = ({ id, name, types }) => {
  const navigate = useNavigate();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

  const {
    setLoading,
    setError,
    setSinglePokemon,
    setPokemonAbout,
  } = useContext(PokedexContext);

  const mainTypes = Object.keys(Colors);
  const pokeTypes = types.map((type) => type.type.name);
  const type = mainTypes.find((pokeType) => pokeTypes.indexOf(pokeType) > -1);
  const color = Colors[type];

  const styleBg = {
    backgroundColor: `${color}`,
  };

  const handleClick = async () => {
    setLoading(true);

    try {
      const pokemonData = await searchPokemon(name);
      const pokemonAbout = await getPokemonSpecies(
        pokemonData.species.url,
      );
      navigate(`/Pokemon/${name}`);
      setSinglePokemon(pokemonData);
      setPokemonAbout(pokemonAbout);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
      setSinglePokemon([]);
    }
  };

  return (
        <section
            className='pokemonCard cursor-pointer'
            style={styleBg}
            onClick={handleClick}
        >
            <h2 className='capitalize font-bold tracking-tighter md:text-lg text-sm text-white'>
                {name}
            </h2>
            <h3>#{String(`${id}`).padStart(3, '0')}</h3>
            <figure className='flex items-center justify-center'>
                <figcaption className='flex flex-col  justify-center items-center w-1/2'>
                    {types.map((t, index) => (
                        <small
                            key={index}
                            className='my-1 rounded-full md:text-base text-xs typeName'
                        >
                            {t.type.name}
                        </small>
                    ))}
                </figcaption>
                <div className='w-1/2 relative'>
                    <img className='pokeBall' src={PokeBall} alt='Pokeball' />
                    <img
                        className='pokemonImg'
                        src={imageUrl}
                        // src={img}
                        alt={name}
                    />
                </div>
            </figure>
        </section>
  );
};

export default PokemonCard;

PokemonCard.propTypes = {
  id: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(String).isRequired,
  name: PropTypes.string.isRequired,
};
