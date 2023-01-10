import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Pokemons from "./Pokemons";

describe('Pokemon List',()=>{

  test('render Pokemon component', () => {
    const component = render(<Pokemons />)
    component.getByPlaceholderText('Ingrese el nombre o id a buscar')
  })
  
  test('Change input for search pokemons', () => {
    const component = render(<Pokemons />)
    component.getByPlaceholderText('Ingrese el nombre o id a buscar')
    console.log("asd", component)
  })
  
})