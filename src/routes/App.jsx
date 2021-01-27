import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				{/*Encuentra el path y lo empuja según la ruta puesta. Switch es el children que le estamos pasando a components/Layout.jsx*/}
				<Switch>
					<Route exact path='/' component={Home} />
					<Route exact path='/checkout' component={Checkout} />
					<Route exact path='/checkout/information' component={Information} />
					<Route exact path='/checkout/payment' component={Payment} />
					<Route exact path='/checkout/success' component={Success} />
					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
};

export default App;
