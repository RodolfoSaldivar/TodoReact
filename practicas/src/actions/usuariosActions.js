import axios from 'axios';

export const traerUsuarios = () => async (dispatch) => {

	dispatch({ type: 'llamar_usuario' });

	try {
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		dispatch({ type: 'usuario_exitoso', payload: response.data });
	}
	catch(error) {
		dispatch({ type: 'usuario_fallo', payload: error.message });
	}
};

export const cambiarNombre = (nombre) => (dispatch) => {
	dispatch({ type: 'cambio_nombre', payload: nombre });
};