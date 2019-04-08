import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainContainer from 'ReusableComponent/MainContainer';
import NavigationMenu from 'App/NavigationMenu';
import Header from 'App/Header';
import Login from 'App/Login';
import Dashboard from 'App/Dashboard';
import ViewContent from 'App/ViewContent';
import Discover from 'App/Discover';
import Users from 'App/Users';
import Subscribers from 'App/Subscribers';
import Products from 'App/Products';
import UnknownPage from 'ReusableComponent/UnknownPage';

import 'App/App.css';

class App extends Component {
	
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					{/* <!-- [ Pre-loader ] start --> */}

					{/* <div className="loader-bg">
						<div className="loader-track">
							<div className="loader-fill"></div>
						</div>
					</div> */}

					{/* <!-- [ Pre-loader ] End --> */}

					{/* <!-- [ navigation menu ] start --> */}

					<Route path="/App" component={NavigationMenu} />

					{/* <!-- [ navigation menu ] end --> */}

					{/* <!-- [ Header ] start --> */}

					<Route path="/App" component={Header} />

					{/* <!-- [ Header ] end --> */}
					
					{/* <!-- [ Main Content ] start --> */}

					<Switch>
						<Route exact path="/" component={Login} />
							<MainContainer>
								<Route path="/App/Dashboard" component={Dashboard} />
								<Route path="/App/ViewContent" component={ViewContent} />
								<Route path="/App/Discover" component={Discover} />
								<Route path="/App/Users" component={Users} />
								<Route path="/App/Subscribers" component={Subscribers} />
								<Route path="/App/Products" component={Products} />
							</MainContainer>
						<Route component={UnknownPage} />
					</Switch>

					{/* <!-- [ Main Content ] end --> */}

				</div>
			</BrowserRouter>
		);
	}
}

export default App;
