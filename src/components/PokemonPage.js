import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const API = "http://localhost:3001/pokemon"
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch(API)
      .then(r => r.json())
      .then(setPokemon)
  }, []);

  function addPokemon(formData) {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData),
    }) 
      .then(r => r.json())
      .then(newPoke => setPokemon([...pokemon, newPoke]))
  }

  const displayPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(search))

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAdd={addPokemon} />
      <br />
      <Search onSearch={setSearch} search={search} />
      <br />
      <PokemonCollection pokemon={displayPokemon} />
    </Container>
  );
}

export default PokemonPage;
