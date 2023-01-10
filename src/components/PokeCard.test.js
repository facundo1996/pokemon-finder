import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import PokeCard from "./PokeCard";

test('', () => {
  const pokemon = {
    name : 'Poketester',
    types : [{type:
      {
        name:'test1type'
      }},
      {type:
      {
        name:'test2type'
      }}
    ],
    sprites : {
      front_default : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/96.png"
    },
    id: 140
  }

  const component = render(<PokeCard pokemon={pokemon}/>)

  component.getByText('Poketester')
  component.getByText('test1type')
  component.getByText('test2type')
  expect(component.container).toHaveTextContent('Poketester')
})