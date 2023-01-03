import React from 'react';
import '../styles/App.css';
import PokeCard from './PokeCard';

class Pokemons extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return <div className='pokemons-container mt-5 row'>
			<PokeCard />
		</div>
	}
	

}

export default Pokemons;