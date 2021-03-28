import './App.css';
import Header from './components/Header/Header';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonCard from './components/PokemonCard/PokemonCard';
import React, { useState, useEffect } from 'react';
import { getAllPokemons } from './services/Client';
function App() {

  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState([true]);
  const [nextURL, setNextURL] = useState('');
  const [previousURL, setPreviousURL] = useState('');

  const endPointURL = 'https://pokeapi.co/api/v2/pokemon';



  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemons(endPointURL);
      console.log(response);
      setNextURL(response.next);
      setPreviousURL(response.previous);
      setLoading(false);
      console.log("git sucks");
    }

    fetchData();
  }, [])


  return (
    <div className="App">
      <Header loading={loading} ></Header>

      <div className="grid grid-cols-2 gap-2">
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
      <PokemonCard image="https://pngimg.com/uploads/pokemon/pokemon_PNG72.png" name="picatchu" type="Electrical"></PokemonCard>
         
      </div>


    </div>
  );
}

export default App;
