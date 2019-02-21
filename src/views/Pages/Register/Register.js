import React from "react";
import { Button, Card, CardBody, Col, Container, Form, Row } from "reactstrap";
import Joi from "joi-browser";
import FormComponent from "../../../components/formComponent";
import { toast } from "react-toastify";
import { register } from "../../../services/userService";

class Register extends FormComponent {
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
			await register(data);
			toast.success("Please login. User signed up.");
			this.props.history.push("/login");
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
		return (
			<div className="app flex-row align-items-center">
				<Container>
					<Row className="justify-content-center">
						<Col md="9" lg="7" xl="6">
							<Card className="mx-4">
								<CardBody className="p-4">
									<Form onSubmit={this.handleSubmit}>
										<h1 className="text-center">
											Register
										</h1>
										<br />
										{this.renderInput("email", "Email")}
										{this.renderInput(
											"password",
											"Password",
											"password"
										)}
										<Button
											color="success"
											type="submit"
											block>
											Create Account
										</Button>
									</Form>
								</CardBody>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Register;
