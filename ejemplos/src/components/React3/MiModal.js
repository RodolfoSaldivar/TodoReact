import React from 'react';
import { Modal, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const MiModal = (props) => (
	<div>
		<Modal
  			header='Modal Header'
 			trigger={<Button>MODAL</Button>}
 		>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
			</p>
			<Link to='/tarjetas'>
				Tarjetas
			</Link>
		</Modal>
	</div>
);

export default MiModal;