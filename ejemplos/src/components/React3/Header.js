import React from 'react';
import { Navbar, NavItem } from 'react-materialize';
import { Link } from 'react-router-dom';

const Header = (props) => (
	<Navbar left>
		<li>
			<Link to='/tarjetas'>
				Tarjetas
			</Link>
		</li>
		<li>
			<Link to='/modal'>
				Modal
			</Link>
		</li>
	</Navbar>
);

export default Header;