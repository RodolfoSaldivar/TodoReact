import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as usuariosActions from '../../actions/usuariosActions';
import { Preloader } from 'react-materialize';

class Usuarios extends Component {

	componentDidMount() {
		this.props.traerUsuarios();
	}

	desplegar = () => (
		this.props.usuarios.map((usuario, index) => (
			<li>
				{ usuario.name }
			</li>
		))
	);

	cambioNombre = (event) => {
		this.props.cambiarNombre(event.target.value);
	};

	render() {
		return (
			<div style={{margin: '100px'}}>
				<input value={ this.props.nombre } onChange={ this.cambioNombre } />
				<ul>
				{ this.props.error }
				
				{ (this.props.cargando) ? <Preloader size='big'/> : '' }

				{ this.desplegar() }
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ usuariosReducer }) => {
	return usuariosReducer;
}

export default connect(mapStateToProps, usuariosActions)(Usuarios);
