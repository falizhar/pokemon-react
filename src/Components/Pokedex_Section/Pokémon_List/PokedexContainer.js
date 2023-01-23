import React, { lazy, Suspense } from 'react';
import Loader from '../../Ui/Loader/Loader';

const PokemonList = lazy(() => import('./PokemonList'));
const PokedexContainer = () => (
        <main className='px-2 w-full mx-auto z-40 pt-4'>
            <Suspense fallback={<Loader/>}>
                <PokemonList/>
            </Suspense>
        </main>
);

export default PokedexContainer;
