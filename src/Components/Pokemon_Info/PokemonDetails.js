import React, { useState } from 'react';
import PropTypes from 'prop-types';
import About from './About/About';
import Evolution from './Evolution/Evolution';
import Moves from './Moves/Moves';
import Stats from './Stats/Stats';

function PokemonDetails({
  color,
  types,
}) {
  const [about, setAbout] = useState(true);
  const [stats, setStats] = useState(false);
  const [evolution, setEvolution] = useState(false);
  const [moves, setMoves] = useState(false);

  return (
    <section className="pokeDetails">
      <section className="flex items-center justify-between border-b mb-4 text-sm w-full">
        <button
          type="button"
          className={`${about ? 'detailsBtn active' : 'detailsBtn'}`}
          onClick={() => {
            setAbout(!about);
            setEvolution(false);
            setMoves(false);
            setStats(false);
          }}
        >
          About
        </button>
        <button
          type="button"
          className={`${stats ? 'detailsBtn active' : 'detailsBtn'}`}
          onClick={() => {
            setAbout(false);
            setEvolution(false);
            setMoves(false);
            setStats(!stats);
          }}
        >
          Base Stats
        </button>
        <button
          type="button"
          className={`${
            evolution ? 'detailsBtn active' : 'detailsBtn'
          }`}
          onClick={() => {
            setAbout(false);
            setEvolution(!evolution);
            setMoves(false);
            setStats(false);
          }}
        >
          Evolution
        </button>
        <button
          className={`${moves ? 'detailsBtn active' : 'detailsBtn'}`}
          onClick={() => {
            setAbout(false);
            setEvolution(false);
            setMoves(!moves);
            setStats(false);
          }}
        >
          Moves
        </button>
      </section>
      {about && (
        <About
          about={about}
          color={color}
        />
      )}
      {stats && <Stats color={color} stats={stats} types={types} />}
      {evolution && <Evolution evolution={evolution} />}
      {moves && <Moves moves={moves} />}
    </section>
  );
}

export default PokemonDetails;

PokemonDetails.propTypes = {
  color: PropTypes.string,
  types: PropTypes.array,
};
