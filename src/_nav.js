export default {
	items: [
		{
			name: "Dashboard",
			url: "/dashboard",
			icon: "icon-home"
		},
		{
			name: "Admin",
			url: "/admin",
			icon: "icon-settings",
			children: [
				{
					name: "Companies",
					url: "/admin/company",
					icon: "fa fa-th-list"
				}
			]
		}
	]
};
