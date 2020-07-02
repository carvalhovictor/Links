import React from "react";

const Layout = ({ children }) => { //props.children
	return (
		<div className="layout">
			<nav className="navbar navbar-expand-lg bg-primary text-light">
				<div className="container d-flex w-100 justify-content-between">
					<div>
						<span>BACK</span>
					</div>
					<div className="text-center">
						<strong>Links</strong>
					</div>
					<div>
						<span>Logout</span>
					</div>
				</div>
			</nav>
			<div className="container">{children}</div>
		</div>
	);
};

export default Layout;