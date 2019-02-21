import React from "react";
import ReactDOM from "react-dom";
import Company from "./Company";
import { shallow } from "enzyme";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<Company />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders without crashing", () => {
	shallow(<Company />);
});
