import React from 'react';
import '../styles/App.css';

class PokeCard extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		return <div className='col-3'>
			<div className=''>
				<img src={this.props.pokemon.sprites.front_default} alt="" />
				{this.props.pokemon.name}
			</div>
		</div>
	}
	

}

export default PokeCard;