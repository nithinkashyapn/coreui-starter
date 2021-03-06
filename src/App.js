import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Loadable from "react-loadable";
import ProtectedRoute from "./components/auth/protectedRoute";
import Logout from "./components/auth/logout";
import "react-toastify/dist/ReactToastify.css";
import "./App.scss";

const loading = () => (
	<div className="animated fadeIn pt-3 text-center">
		<div className="sk-spinner sk-spinner-pulse" />
	</div>
);

// Containers
const DefaultLayout = Loadable({
	loader: () => import("./containers/DefaultLayout"),
	loading
});

// Pages
const Login = Loadable({
	loader: () => import("./views/Pages/Login"),
	loading
});

const Register = Loadable({
	loader: () => import("./views/Pages/Register"),
	loading
});

const Page404 = Loadable({
	loader: () => import("./views/Pages/Page404"),
	loading
});

const Page500 = Loadable({
	loader: () => import("./views/Pages/Page500"),
	loading
});

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<ToastContainer />
				<Switch>
					<Route
						exact
						path="/login"
						name="Login Page"
						component={Login}
					/>
					<Route
						exact
						path="/logout"
						name="Logout Page"
						component={Logout}
					/>
					<Route
						exact
						path="/register"
						name="Register Page"
						component={Register}
					/>
					<Route
						exact
						path="/404"
						name="Page 404"
						component={Page404}
					/>
					<Route
						exact
						path="/500"
						name="Page 500"
						component={Page500}
					/>
					<ProtectedRoute
						path="/dashboard"
						name="Home"
						component={DefaultLayout}
					/>
					<ProtectedRoute
						path="/"
						name="Home"
						component={DefaultLayout}
					/>
					<Redirect to="/404" />
				</Switch>
			</React.Fragment>
		);
	}
}

export default App;
