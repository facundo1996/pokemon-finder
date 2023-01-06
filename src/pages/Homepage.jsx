import React from 'react';
import '../styles/App.css';
import Pokemons from '../components/Pokemons';
import pokemonFinder from '../styles/images/pokemon-finder.png'

class Homepage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			test : "test"
		}
	}

	render(){
		const test = this.state.test
		return <div className='homepage-container'>
			<div className='container '>
				<div className='d-flex align-items-center justify-content-center flex-column'>
					<img className='img-pokemon-finder' src={pokemonFinder} alt="" />
					<h3 className='subtitle-homepage mb-4'>El que quiera Pokemons, que los busque: </h3>
				</div>
				
				<Pokemons />
			</div>
		</div>
	}
	

}

export default Homepage;