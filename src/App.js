import './App.css';
import Header from './components/Header/Header';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonCard from './components/PokemonCard/PokemonCard';
import React, { useState, useEffect } from 'react';
import { getAllPokemons, getPokemon } from './services/Client';
function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [nextURL, setNextURL] = useState('');
  const [previousURL, setPreviousURL] = useState('');

  const endPointURL = 'https://pokeapi.co/api/v2/pokemon';



  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(endPointURL);
      setNextURL(response.next);
      setPreviousURL(response.previous);
      let pok = await loadingPokemon(response.results);
      console.log(pok);

      setLoading(false);
    }

    fetchData();
  }, [])

 const loadingPokemon= async function (data){
    let pokemonEntity = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon.url);
      return pokemonRecord;
    }))
    setPokemonData(pokemonEntity);
  };
  console.log(pokemonData);



  return (
    <div className="App">
      <Header loading={loading} ></Header>

      <div className="grid grid-cols-2 gap-1">
        {pokemonData.map((pokemon, index) =>{
          return <PokemonCard key={index} pokemon={pokemon}></PokemonCard>;
        })}      
      </div>


    </div>
  );
}

export default App;
