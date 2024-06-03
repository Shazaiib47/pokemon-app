import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchBar from './components/SearchBar';
import PokemonCard from './components/PokemonCard';
import PokemonDetail from './components/PokemonDetail';
import './styles.css';

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
      const fetchedPokemons = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonDetails = await axios.get(pokemon.url);
          return pokemonDetails.data;
        })
      );
      setPokemons(fetchedPokemons);
      setFilteredPokemons(fetchedPokemons);
    };

    fetchPokemons();
  }, []);

  const handleSearch = (query) => {
    console.log("Search query:", query);
    const filtered = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(query.toLowerCase())
    );
    console.log("Filtered:", filtered);
    setFilteredPokemons(filtered);
  };

  const handleCardClick = (pokemon) => {
    setSelectedPokemon(pokemon);
    setIsDetailOpen(true);
  };

  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setSelectedPokemon(null);
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      <Grid container spacing={2}>
        {filteredPokemons.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={pokemon.name}>
            <PokemonCard pokemon={pokemon} onClick={handleCardClick} />
          </Grid>
        ))}
      </Grid>
      <PokemonDetail open={isDetailOpen} onClose={handleCloseDetail} pokemon={selectedPokemon} />
    </Container>
  );
};

export default App;
