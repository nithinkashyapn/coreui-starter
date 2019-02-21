import React from "react";

const CustomErrorDiv = ({ error }) => {
	return <div style={{ color: "#f00", textAlign: "right" }}>{error}</div>;
};

export default CustomErrorDiv;
