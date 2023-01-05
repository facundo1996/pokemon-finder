import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/App.css';
import PokeCard from './PokeCard';

export default class Pokemons extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			allPokemons : [],
			pokemonSelected: [],
		}
		this.searchPokemon = this.searchPokemon.bind(this);
	}

	searchPokemon(e){
		this.setState(({pokemonSelected : this.state.allPokemons}))
		let finderCharacters = e.target.value.toLowerCase()
		if(!finderCharacters){
			this.setState(({pokemonSelected : this.state.allPokemons}))
		}else{
			this.setState(({pokemonSelected : []}))
			this.state.allPokemons.map(poke => {
				if(poke.name.search(finderCharacters) != -1 || finderCharacters == poke.id){
					this.setState( prevState => ({
						pokemonSelected : [...prevState.pokemonSelected, poke]
					}))
				}
			})
		}
	}

	componentDidMount(){
		const totalPokemon = 150
		for(let pokemonId=1;pokemonId<=totalPokemon;pokemonId++){
			fetch(`https://pokeapi.co/api/v2/pokemon/`+pokemonId)
					.then(res => res.json())
					.then(response => {
						this.setState( prevState => ({
							allPokemons : [...prevState.allPokemons, response]
						}))
						this.setState(({pokemonSelected : this.state.allPokemons}))						
					})
				}
	}

	render(){
		return <div>
			<div className='w-100 d-flex'>
				<input className='input-search' onChange={this.searchPokemon} placeholder='Ingrese el nombre o id a buscar' type="text" />
				<div className='btn-search-container'>
					<button className='btn-search'>Buscar</button>
				</div>
			</div>
			<div className='pokemons-container mt-5 row'>
					{this.state.pokemonSelected.map((poke, index) => {
						return <PokeCard key={index} pokemon={poke} /> 
					})}
			</div>
		</div>
	}
	

}
