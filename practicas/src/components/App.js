import React from 'react';
import Header from './Header';
import React1 from './React1';
import React2 from './React2';
import Usuarios from './Usuarios';
import { BrowserRouter, Route } from 'react-router-dom';

const React3 = (props) => (
	<div>
		<BrowserRouter>
			<div>
				<Header />
				<br />
				<Route exact path='/react1' component={ React1 } />
				<Route exact path='/react2' component={ React2 } />
				<Route exact path='/usuarios' component={ Usuarios } />
			</div>
		</BrowserRouter>
	</div>
);

export default React3;