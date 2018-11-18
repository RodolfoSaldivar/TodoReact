import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = (props) => (
	<Navbar left>
		<li>
			<Link to='/react1'>
				React1
			</Link>
		</li>
		<li>
			<Link to='/react2'>
				React2
			</Link>
		</li>
		<li>
			<Link to='/usuarios'>
				Usuarios
			</Link>
		</li>
	</Navbar>
);

export default Header;