import React, {
  useContext, lazy, Suspense, useEffect,
} from 'react';
import PokedexContext from '../../../Context/GlobalContext';
import Loader from '../../Ui/Loader/Loader';

const PokemonCard = lazy(() => import('./PokemonCard'));
const PokemonList = () => {
  const { loading, allPokemons, setLoading } = useContext(PokedexContext);

  useEffect(() => {
    if (allPokemons.length < 1) setLoading(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  if (loading) return <Loader/>;

  return (
    <section
      className='grid grid-cols-2 justify-items-center gap-x-2 md:gap-x-4 md:gap-y-5 gap-y-2 md:w-11/12 w-full mx-auto pb-10 z-10'>
      {allPokemons.map((pokemon) => (
        // eslint-disable-next-line react/jsx-key
        <Suspense fallback={<Loader/>}>
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            id={pokemon.id}
            types={pokemon.types}
          />
        </Suspense>
      ))}
    </section>
  );
};

export default PokemonList;
