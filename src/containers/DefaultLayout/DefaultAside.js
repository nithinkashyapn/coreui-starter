import React, { Component } from "react";
import PropTypes from "prop-types";

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultAside extends Component {
	render() {
		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return <React.Fragment>Right Sidebar Content</React.Fragment>;
	}
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
