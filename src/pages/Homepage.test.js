import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Homepage from "./Homepage";

test('render Homepage', () => {
  const component = render(<Homepage />)
  component.getByText('El que quiera Pokemons, que los busque:')
})