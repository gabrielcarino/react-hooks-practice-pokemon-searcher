import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  const cards = pokemon.map(poke => <PokemonCard poke={poke} key={poke.id} />)

  return (
    <Card.Group itemsPerRow={6}>
      {cards}
    </Card.Group>
  );
}

export default PokemonCollection;
