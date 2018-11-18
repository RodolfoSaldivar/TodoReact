import React from 'react';
import Cubierto from './Cubierto';
import Plato from './Plato';

const Mantel = (props) =>
(
	<div className="mantel">
		<Cubierto />
		<Plato />
		<Cubierto />
	</div>
);

export default Mantel;