import React from 'react';
import Header from './Header';
import Tarjeta from './Tarjeta';
import MiModal from './MiModal';
import { BrowserRouter, Route } from 'react-router-dom';

const React3 = (props) => (
	<div>
		<BrowserRouter>
			<div>
				<Header />
				<br />
				<Route exact path='/tarjetas' component={ Tarjeta } />
				<Route exact path='/modal' component={ MiModal } />
			</div>
		</BrowserRouter>
	</div>
);

export default React3;