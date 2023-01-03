import React from 'react';
import '../styles/App.css';
import Pokemons from '../components/Pokemons';

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
			<div className='container'>
				<h1 className='title-homepage'>Pokemon Finder</h1>
				<h3 className='subtitle-homepage my-4'>El que quiera Pokemons, que los busque: </h3>
				<div className='w-100 d-flex'>
					<input className='input-search' placeholder='Ingrese el nombre a buscar' type="text" />
					<div className='btn-search-container'>
						<button className='btn-search'>Buscar</button>
					</div>
				</div>
				<Pokemons />
			</div>
		</div>
	}
	

}

export default Homepage;