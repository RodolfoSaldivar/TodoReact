import React from 'react';

const Boton = (props) => (
	<button onClick={ props.incrementar }>
		{ props.perro }
	</button>
);

export default Boton;