import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onAdd }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    sprites: {
      front: "",
      back: ""
    },
  });

  function handleAddPoke(e) {
    onAdd(formData)
    setFormData({
      name: "",
      hp: "",
      sprites: {
        front: "",
        back: ""
      },
    });
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleAddPoke} >
        <Form.Group widths="equal">
          <Form.Input 
            fluid 
            label="Name" 
            placeholder="Name" 
            name="name" 
            value={formData.name} 
            onChange={e => setFormData({...formData, name: e.target.value})} />
          <Form.Input 
            fluid  
            label="hp" 
            placeholder="hp" 
            name="hp" 
            value={formData.hp} 
            onChange={e => setFormData({...formData, hp: e.target.value})} />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
            onChange={e => setFormData({...formData, sprites: {...formData.sprites, front: e.target.value}})}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={e => setFormData({...formData, sprites: {...formData.sprites, back: e.target.value}})}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
