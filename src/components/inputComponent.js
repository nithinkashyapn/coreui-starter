import React from "react";
import { Input, FormGroup, Label } from "reactstrap";
import CustomErrorDiv from "./errorDiv";

const CustomInput = ({ name, label, error, ...rest }) => {
	return (
		<FormGroup>
			<Label for={name}>{label}</Label>
			<Input name={name} id={name} {...rest} />
			{error && <CustomErrorDiv error={error} />}
		</FormGroup>
	);
};

export default CustomInput;
