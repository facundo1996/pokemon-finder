import React from 'react';
import '../styles/App.css';

class PokeCard extends React.Component {
	constructor(props){
		super(props)
		this.namePokemonToUpperCase = this.namePokemonToUpperCase.bind(this);
	}
	
	namePokemonToUpperCase(){
		return this.props.pokemon.name.charAt(0).toUpperCase() + this.props.pokemon.name.slice(1);
	}

	render(){
		let typesPokemon = this.props.pokemon.types.map(pook =>{
			return pook.type.name
		})
		return <div className='col-12 col-sm-6 col-md-3 d-flex align-items-center justify-content-center card-container'>
			<div className='card'>
				<img className='img-pokemon' src={this.props.pokemon.sprites.front_default} alt="" />
				<div className='mt-5'>
					<div className='name-pokemon'>{this.namePokemonToUpperCase()}</div>
					<div className='type-pokemon-container'><span className='type-title-pokemon'>Type</span> {this.props.pokemon.types.map((pook,index) =>{
						return <span key={index} className='type-pokemon'>{pook.type.name}</span>
					})}
					</div>
					<div className='info-pokemon id-pokemon'>{this.props.pokemon.id}</div>
				</div>
			</div>
		</div>
	}
	

}

export default PokeCard;