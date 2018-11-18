
const INITIAL_STATE = {
	usuarios: [],
	cargando: false,
	error: '',
	nombre: ''
};

export default (state = INITIAL_STATE, action) =>
{
	switch (action.type)
	{
		case 'llamar_usuario': return { ...state, error: '', cargando: true };
		case 'usuario_exitoso': return { ...state, error: '', cargando: false, usuarios: action.payload };
		case 'usuario_fallo': return { ...state, error: action.payload, cargando: false };
		case 'cambio_nombre': return { ...state, nombre: action.payload };
		default: return state;
	}
}