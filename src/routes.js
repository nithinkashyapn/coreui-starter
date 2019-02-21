import React from "react";
import DefaultLayout from "./containers/DefaultLayout";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const Company = React.lazy(() => import("./views/Admin/Company"));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: "/", name: "Home", component: DefaultLayout, exact: true },
	{ path: "/dashboard", name: "Dashboard", component: Dashboard },
	{ path: "/admin", name: "Admin", component: Company, exact: true },
	{
		path: "/admin/company",
		name: "Company",
		component: Company
	}
];

export default routes;
