import React from 'react';
import { useEffect, useState } from 'react';
import '../styles/App.css';
import PokeCard from './PokeCard';
import pokeball1 from '../styles/images/pokeball1.png'

export default class Pokemons extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			allPokemons : [],
			pokemonSelected: [],
			showAllPokemon: true,
			pageSelected: 1,
		}
		this.searchPokemon = this.searchPokemon.bind(this);
	}

	searchPokemon(e){
		this.setState({showAllPokemon:false})
		this.setState(({pokemonSelected : this.state.allPokemons}))
		let finderCharacters = e.target.value.toLowerCase()
		if(!finderCharacters){
			this.setState(({pokemonSelected : this.state.allPokemons}))
			this.setState({showAllPokemon:true})
			this.pagination(0,24)
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

	pagination(min,max,page){
		this.setState(({pokemonSelected : this.state.allPokemons.slice(min,max)}))	
		this.setState(({pageSelected : page}))		
	}

	async componentDidMount(){
		const totalPokemon = 152
		for(let pokemonId=1;pokemonId<=totalPokemon;pokemonId++){
			await fetch(`https://pokeapi.co/api/v2/pokemon/`+pokemonId)
					.then(res => res.json())
					.then(response => {
						this.setState( prevState => ({
							allPokemons : [...prevState.allPokemons, response]
						}))
						this.setState(({pokemonSelected : this.state.allPokemons}))						
						this.pagination(0,24,1)
					})
		}		
	}

	render(){
		return <div>
			<div className='w-100 d-flex'>
				<div className='search-container'>
					<img src={pokeball1} className="img-pokeball-search-invert" alt="" />
					<input className='input-search' onChange={this.searchPokemon} placeholder='Ingrese el nombre o id a buscar' type="text" />
					<img src={pokeball1} className="img-pokeball-search" alt="" />
				</div>
			</div>
			<div className='pokemons-container mt-5 row'>
					{this.state.pokemonSelected.map((poke, index) => {
						return <PokeCard key={index} pokemon={poke} /> 
					})}
			</div>
			{this.state.showAllPokemon ? <div className='d-flex w-100 align-items-center justify-content-center mt-5'>
					<div id='pagId1' className={this.state.pageSelected==1 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(0,24,1,)}}>1</div>
					<div id='pagId2' className={this.state.pageSelected==2 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(24,48,2)}} >2</div>
					<div id='pagId3' className={this.state.pageSelected==3 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(48,72,3)}}>3</div>
					<div id='pagId4' className={this.state.pageSelected==4 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(72,96,4)}}>4</div>
					<div id='pagId5' className={this.state.pageSelected==5 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(96,120,5)}}>5</div>
					<div id='pagId6' className={this.state.pageSelected==6 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(120,144,6)}}>6</div>
					<div id='pagId7' className={this.state.pageSelected==7 ?'mx-3 pagination-number selectPage' :'mx-3 pagination-number'} onClick={()=>{this.pagination(144,150,7)}}>7</div>
			</div> :""
			}
		</div>
	}
	

}
