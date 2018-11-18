import React from 'react';
import Mantel from './Mantel';

const Mesa = (props) =>
(
	<div className="mesa_principal">
		<div className="display_flex space_btw">
			<Mantel />
			<Mantel />
			<Mantel />
		</div>
		<div style={{marginTop: "50px"}} />
		<div className="display_flex space_btw">
			<Mantel />
			<Mantel />
			<Mantel />
		</div>
	</div>
);

export default Mesa;