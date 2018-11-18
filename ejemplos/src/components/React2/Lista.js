import React, { Component } from 'react';

class Lista extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nombre: '',
			apellido: '',
			lista: []
		}
	}

	cambioInput = (event, propiedad) => {
		this.setState({
			[propiedad]: event.target.value
		})
	};

	agregar = () => {
		// const nombre = this.state.nombre;
		// const apellido = this.state.apellido;
		// let lista = this.state.lista;
		let { nombre, apellido, lista } = this.state;
		const persona = { nombre, apellido };
		lista.push(persona);
		this.setState({
			lista,
			nombre: '',
			apellido: ''
		});
	};

	borrar = () => {
		this.setState({
			lista: []
		})
	};

	desplegar = () => (
		this.state.lista.map((persona, index) => (
			<li key={index}>
				{ `${persona.nombre} ${persona.apellido}` }
			</li>
		))
	);

	render() {
		return (
			<div>
				<input
					value={ this.state.nombre }
					onChange={ (event) => this.cambioInput(event, 'nombre') }
				/>
				<input
					value={ this.state.apellido }
					onChange={ (event) => this.cambioInput(event, 'apellido') }
				/>
				<button onClick={ this.agregar }>
					Agregar
				</button>
				<button onClick={ this.borrar }>
					Borrar todo
				</button>
				<ul>
					{ this.desplegar() }
				</ul>
			</div>
		);
	}
}

export default Lista;
