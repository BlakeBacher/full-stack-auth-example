import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import axios from "axios";

import Login from "./components/Login/Login";
import Private from "./components/Private/Private";
import Home from "./components/Home";

// -----PrivateRoute---------------//

class PrivateRoute extends Component {
	constructor(props) {
		super(props);
		this.state = {
			authenticated: null
		};
	}

	componentDidMount() {
		axios.get("/auth/me").then(response => {
			this.setState({
				authenticated: response
			});
    })
    .catch(err => {
      this.setState({authenticated: false})

    });
	}

	render() {
    const {component: Component, ...rest} = this.props
		return this.state.authenticated === null ? (
			<div>Loading...</div>
		) : this.state.authenticated === false ? (
			<Redirect to="/" />
		) : (
			<Component {...this.props} />
		);
	}
}

function Router() {
	return (
		<Switch>
			<Route component={Login} path="/" exact />
			<Route component={Home} path="/home" exact />
			<PrivateRoute component={Private} path="/private" />
		</Switch>
	);
}

export default Router;
