import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Pokedex from './Components/Pokedex_Section/Pokedex';
import DetailsContainer from './Components/Pokemon_Info/PokemonDetailsContainer';
import Error404 from './Components/Ui/Error/Error404';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="Pokemon">
          <Route path=":name" element={<DetailsContainer />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
