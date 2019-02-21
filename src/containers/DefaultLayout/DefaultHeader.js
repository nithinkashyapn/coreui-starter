import React, { Component } from "react";
import {
	Badge,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Nav,
	Button
} from "reactstrap";

import PropTypes from "prop-types";

import {
	AppAsideToggler,
	AppHeaderDropdown,
	AppNavbarBrand,
	AppSidebarToggler
} from "@coreui/react";

import logo from "../../assets/img/brand/logo.svg";
import sygnet from "../../assets/img/brand/sygnet.svg";
import avatar from "../../assets/img/avatars/user.png";

const propTypes = {
	children: PropTypes.node
};

const defaultProps = {};

class DefaultHeader extends Component {
	render() {
		// eslint-disable-next-line
		const { children, ...attributes } = this.props;

		return (
			<React.Fragment>
				<AppSidebarToggler className="d-lg-none" display="md" mobile />
				<AppNavbarBrand
					full={{
						src: logo,
						width: 89,
						height: 25,
						alt: "X"
					}}
					minimized={{
						src: sygnet,
						width: 30,
						height: 30,
						alt: "X"
					}}
				/>
				<AppSidebarToggler className="d-md-down-none" display="lg" />
				<Nav className="ml-auto" navbar>
					<AppHeaderDropdown>
						<DropdownToggle nav>
							<img
								src={avatar}
								className="img-avatar"
								alt="admin@bootstrapmaster.com"
							/>
						</DropdownToggle>
						<DropdownMenu
							right
							style={{ right: "auto", height: "auto" }}>
							{/* <DropdownItem
								header
								tag="div"
								className="text-center">
								<strong>Settings</strong>
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-user" /> Profile
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-wrench" /> Settings
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-usd" /> Payments
								<Badge color="secondary">42</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-file" /> Projects
								<Badge color="primary">42</Badge>
							</DropdownItem>
							<DropdownItem>
								<i className="fa fa-shield" /> Lock Account
							</DropdownItem> */}
							<DropdownItem onClick={this.props.onLogout}>
								<i className="fa fa-lock" /> Logout
							</DropdownItem>
						</DropdownMenu>
					</AppHeaderDropdown>
				</Nav>
				<AppAsideToggler className="d-md-down-none" />
				{/*<AppAsideToggler className="d-lg-none" mobile />*/}
			</React.Fragment>
		);
	}
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
