import React from 'react';
import '../styles/App.css';

class Homepage extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			test : "test"

		}
	}

	render(){
		const test = this.state.test
		return <div>{test}</div>
	}
	

}

export default Homepage;