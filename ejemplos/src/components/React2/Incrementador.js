import React, { Component } from 'react';
import Boton from './Boton';

class Incrementador extends Component {
	constructor(props) {
		super(props);
		this.state = {
			cont: 0
		}
	}

	incrementar = () => {
		this.setState({
			cont: this.state.cont + 1
		})
	};

	render() {
		return (
			<div style={{
				marginBottom: '100px',
				paddinTop: '50px'
			}}>
				<button onClick={ this.incrementar }>
					{ this.state.cont }
				</button>
				<br />
				<br />
				<Boton
					perro={ this.state.cont }
					incrementar={ this.incrementar }
				/>
			</div>
		);
	}
}

export default Incrementador;
