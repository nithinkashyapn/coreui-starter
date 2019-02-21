import React from "react";
import {
	Button,
	Card,
	CardBody,
	CardGroup,
	CardFooter,
	Col,
	Container,
	Form,
	Row
} from "reactstrap";
import Joi from "joi-browser";
import FormComponent from "../../../components/formComponent";
import { login, getCurrentUser } from "../../../services/authService";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom";

class Login extends FormComponent {
	state: {
		data: {
			email: "",
			password: ""
		}
	};

	schema = {
		email: Joi.string()
			.required()
			.email()
			.label("Email"),
		password: Joi.string()
			.required()
			.label("Password")
	};

	doSubmit = async () => {
		try {
			const { data } = this.state;
			await login(data.email, data.password);
			const { state } = this.props.location;
			window.location = state ? state.from.pathname : "/dashboard";
		} catch (ex) {
			if (
				ex.response &&
				ex.response.status >= 400 &&
				ex.response.status < 500
			) {
				const errors = { ...this.state.errors };
				errors.username = ex.response.data;
				toast.error(ex.response.data.message);
				this.setState({ errors });
			}
		}
	};

	render() {
		if (getCurrentUser()) return <Redirect to="/dashboard" />;

		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="8">
							<CardGroup>
								<Card className="p-4">
									<CardBody>
										<Form onSubmit={this.handleSubmit}>
											<h1 className="text-center">
												Login
											</h1>
											<br />
											{this.renderInput("email", "Email")}
											{this.renderInput(
												"password",
												"Password",
												"password"
											)}
											<Row>
												<Col xs="6">
													<Button
														color="primary"
														className="px-4"
														type="submit">
														Login
													</Button>
												</Col>
											</Row>
										</Form>
									</CardBody>
									{/* <CardFooter className="p-4">
										<Row>
											<Col>
												<Button
													className="btn-google-plus mb-1"
													block>
													<span>Google</span>
												</Button>
											</Col>
										</Row>
									</CardFooter> */}
								</Card>
							</CardGroup>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Login;
