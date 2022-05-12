import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poke }) {
  const { name, hp, sprites } = poke;
  const [img, setImg] = useState(true)

  return (
    <Card>
      <div onClick={() => setImg(!img)}>
        <div className="image">
          <img src={img ? sprites.front : sprites.back} alt={img ? "front" : "back"} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
