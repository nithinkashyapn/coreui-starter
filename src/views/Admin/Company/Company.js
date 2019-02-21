import React, { Component, Suspense } from "react";
import { Card, CardBody, CardFooter, CardHeader, Col, Row } from "reactstrap";
import { AppFooter } from "@coreui/react";

class Company extends Component {
	state = {};
	render() {
		return (
			<div className="animated fadeIn" style={{"height":"100%", "background-color": "red"}}>
				<Row className="app-scrollable-body" style={{"height":"100%", "background-color": "green"}}>
					<Col xs="12" sm="4" md="3" className="toc" style={{"height":"100%", "background-color": "blue"}}>
						<Card className="toc">
								Lorem ipsum dolor sit amet, consectetuer
								adipiscing elit, sed diam nonummy nibh euismod
								tincidunt ut laoreet dolore magna aliquam erat
								volutpat. Ut wisi enim ad minim veniam, quis
								nostrud exerci tation ullamcorper suscipit
								lobortis nisl ut aliquip ex ea commodo
								consequat.
						</Card>
					</Col>
					<Col xs="12" sm="8" md="9">
						<Card>
							<CardHeader>Card title</CardHeader>
							<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor. Pulvinar elementum integer enim neque. Fermentum leo vel orci porta non. Ut ornare lectus sit amet est placerat in. Nec dui nunc mattis enim ut tellus elementum. Platea dictumst quisque sagittis purus. Lectus quam id leo in vitae turpis massa. Feugiat nisl pretium fusce id. Orci eu lobortis elementum nibh. Quis viverra nibh cras pulvinar.

Nunc pulvinar sapien et ligula. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Justo eget magna fermentum iaculis eu non diam phasellus. Ultricies mi quis hendrerit dolor magna eget est lorem. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Pellentesque pulvinar pellentesque habitant morbi. A cras semper auctor neque vitae tempus quam pellentesque. Duis ut diam quam nulla porttitor massa id neque. Id aliquet risus feugiat in ante metus. A arcu cursus vitae congue mauris rhoncus aenean. Vitae turpis massa sed elementum tempus. Ultricies tristique nulla aliquet enim. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Tincidunt vitae semper quis lectus nulla at. Lacinia quis vel eros donec ac. Nunc consequat interdum varius sit amet.

Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Magnis dis parturient montes nascetur ridiculus mus mauris. Elementum pulvinar etiam non quam. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Cursus risus at ultrices mi. Habitant morbi tristique senectus et netus et. Donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Tempor orci dapibus ultrices in iaculis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Eu sem integer vitae justo. Duis at tellus at urna condimentum. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Viverra maecenas accumsan lacus vel facilisis. Turpis egestas maecenas pharetra convallis posuere. Suspendisse faucibus interdum posuere lorem ipsum dolor. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.

Orci porta non pulvinar neque. Habitant morbi tristique senectus et. Tincidunt arcu non sodales neque sodales. Odio facilisis mauris sit amet massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Dignissim suspendisse in est ante. Tellus in hac habitasse platea dictumst vestibulum. Enim blandit volutpat maecenas volutpat blandit aliquam. Enim ut sem viverra aliquet eget sit amet. Diam donec adipiscing tristique risus. Vulputate dignissim suspendisse in est ante in nibh.

Sit amet consectetur adipiscing elit pellentesque habitant. Consectetur a erat nam at lectus urna. Vulputate dignissim suspendisse in est ante in. Non enim praesent elementum facilisis leo vel fringilla. Magna etiam tempor orci eu lobortis elementum nibh tellus. Urna porttitor rhoncus dolor purus non enim praesent. Id porta nibh venenatis cras. Purus in massa tempor nec feugiat nisl pretium. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ut aliquam purus sit amet luctus. Nisl nisi scelerisque eu ultrices vitae auctor. Quam nulla porttitor massa id neque. Mus mauris vitae ultricies leo integer malesuada nunc. Eget mi proin sed libero enim sed faucibus turpis in.
							</CardBody>
						</Card>
						<Card>
							<CardHeader>Card title</CardHeader>
							<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor. Pulvinar elementum integer enim neque. Fermentum leo vel orci porta non. Ut ornare lectus sit amet est placerat in. Nec dui nunc mattis enim ut tellus elementum. Platea dictumst quisque sagittis purus. Lectus quam id leo in vitae turpis massa. Feugiat nisl pretium fusce id. Orci eu lobortis elementum nibh. Quis viverra nibh cras pulvinar.

Nunc pulvinar sapien et ligula. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Justo eget magna fermentum iaculis eu non diam phasellus. Ultricies mi quis hendrerit dolor magna eget est lorem. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Pellentesque pulvinar pellentesque habitant morbi. A cras semper auctor neque vitae tempus quam pellentesque. Duis ut diam quam nulla porttitor massa id neque. Id aliquet risus feugiat in ante metus. A arcu cursus vitae congue mauris rhoncus aenean. Vitae turpis massa sed elementum tempus. Ultricies tristique nulla aliquet enim. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Tincidunt vitae semper quis lectus nulla at. Lacinia quis vel eros donec ac. Nunc consequat interdum varius sit amet.

Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Magnis dis parturient montes nascetur ridiculus mus mauris. Elementum pulvinar etiam non quam. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Cursus risus at ultrices mi. Habitant morbi tristique senectus et netus et. Donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Tempor orci dapibus ultrices in iaculis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Eu sem integer vitae justo. Duis at tellus at urna condimentum. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Viverra maecenas accumsan lacus vel facilisis. Turpis egestas maecenas pharetra convallis posuere. Suspendisse faucibus interdum posuere lorem ipsum dolor. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.

Orci porta non pulvinar neque. Habitant morbi tristique senectus et. Tincidunt arcu non sodales neque sodales. Odio facilisis mauris sit amet massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Dignissim suspendisse in est ante. Tellus in hac habitasse platea dictumst vestibulum. Enim blandit volutpat maecenas volutpat blandit aliquam. Enim ut sem viverra aliquet eget sit amet. Diam donec adipiscing tristique risus. Vulputate dignissim suspendisse in est ante in nibh.

Sit amet consectetur adipiscing elit pellentesque habitant. Consectetur a erat nam at lectus urna. Vulputate dignissim suspendisse in est ante in. Non enim praesent elementum facilisis leo vel fringilla. Magna etiam tempor orci eu lobortis elementum nibh tellus. Urna porttitor rhoncus dolor purus non enim praesent. Id porta nibh venenatis cras. Purus in massa tempor nec feugiat nisl pretium. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ut aliquam purus sit amet luctus. Nisl nisi scelerisque eu ultrices vitae auctor. Quam nulla porttitor massa id neque. Mus mauris vitae ultricies leo integer malesuada nunc. Eget mi proin sed libero enim sed faucibus turpis in.
							</CardBody>
						</Card>
						<Card>
							<CardHeader>Card title</CardHeader>
							<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor. Pulvinar elementum integer enim neque. Fermentum leo vel orci porta non. Ut ornare lectus sit amet est placerat in. Nec dui nunc mattis enim ut tellus elementum. Platea dictumst quisque sagittis purus. Lectus quam id leo in vitae turpis massa. Feugiat nisl pretium fusce id. Orci eu lobortis elementum nibh. Quis viverra nibh cras pulvinar.

Nunc pulvinar sapien et ligula. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Justo eget magna fermentum iaculis eu non diam phasellus. Ultricies mi quis hendrerit dolor magna eget est lorem. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Pellentesque pulvinar pellentesque habitant morbi. A cras semper auctor neque vitae tempus quam pellentesque. Duis ut diam quam nulla porttitor massa id neque. Id aliquet risus feugiat in ante metus. A arcu cursus vitae congue mauris rhoncus aenean. Vitae turpis massa sed elementum tempus. Ultricies tristique nulla aliquet enim. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Tincidunt vitae semper quis lectus nulla at. Lacinia quis vel eros donec ac. Nunc consequat interdum varius sit amet.

Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Magnis dis parturient montes nascetur ridiculus mus mauris. Elementum pulvinar etiam non quam. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Cursus risus at ultrices mi. Habitant morbi tristique senectus et netus et. Donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Tempor orci dapibus ultrices in iaculis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Eu sem integer vitae justo. Duis at tellus at urna condimentum. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Viverra maecenas accumsan lacus vel facilisis. Turpis egestas maecenas pharetra convallis posuere. Suspendisse faucibus interdum posuere lorem ipsum dolor. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.

Orci porta non pulvinar neque. Habitant morbi tristique senectus et. Tincidunt arcu non sodales neque sodales. Odio facilisis mauris sit amet massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Dignissim suspendisse in est ante. Tellus in hac habitasse platea dictumst vestibulum. Enim blandit volutpat maecenas volutpat blandit aliquam. Enim ut sem viverra aliquet eget sit amet. Diam donec adipiscing tristique risus. Vulputate dignissim suspendisse in est ante in nibh.

Sit amet consectetur adipiscing elit pellentesque habitant. Consectetur a erat nam at lectus urna. Vulputate dignissim suspendisse in est ante in. Non enim praesent elementum facilisis leo vel fringilla. Magna etiam tempor orci eu lobortis elementum nibh tellus. Urna porttitor rhoncus dolor purus non enim praesent. Id porta nibh venenatis cras. Purus in massa tempor nec feugiat nisl pretium. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ut aliquam purus sit amet luctus. Nisl nisi scelerisque eu ultrices vitae auctor. Quam nulla porttitor massa id neque. Mus mauris vitae ultricies leo integer malesuada nunc. Eget mi proin sed libero enim sed faucibus turpis in.
							</CardBody>
						</Card>
						<Card>
							<CardHeader>Card title</CardHeader>
							<CardBody>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A pellentesque sit amet porttitor eget dolor. Pulvinar elementum integer enim neque. Fermentum leo vel orci porta non. Ut ornare lectus sit amet est placerat in. Nec dui nunc mattis enim ut tellus elementum. Platea dictumst quisque sagittis purus. Lectus quam id leo in vitae turpis massa. Feugiat nisl pretium fusce id. Orci eu lobortis elementum nibh. Quis viverra nibh cras pulvinar.

Nunc pulvinar sapien et ligula. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Justo eget magna fermentum iaculis eu non diam phasellus. Ultricies mi quis hendrerit dolor magna eget est lorem. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Pellentesque pulvinar pellentesque habitant morbi. A cras semper auctor neque vitae tempus quam pellentesque. Duis ut diam quam nulla porttitor massa id neque. Id aliquet risus feugiat in ante metus. A arcu cursus vitae congue mauris rhoncus aenean. Vitae turpis massa sed elementum tempus. Ultricies tristique nulla aliquet enim. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Tincidunt vitae semper quis lectus nulla at. Lacinia quis vel eros donec ac. Nunc consequat interdum varius sit amet.

Aliquam vestibulum morbi blandit cursus risus at ultrices mi. Magnis dis parturient montes nascetur ridiculus mus mauris. Elementum pulvinar etiam non quam. Ut tortor pretium viverra suspendisse potenti nullam ac tortor. Cursus risus at ultrices mi. Habitant morbi tristique senectus et netus et. Donec ultrices tincidunt arcu non sodales neque sodales ut. Nunc non blandit massa enim nec dui nunc mattis. Tempor orci dapibus ultrices in iaculis. Id velit ut tortor pretium viverra suspendisse potenti nullam ac. Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Eu sem integer vitae justo. Duis at tellus at urna condimentum. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo. Viverra maecenas accumsan lacus vel facilisis. Turpis egestas maecenas pharetra convallis posuere. Suspendisse faucibus interdum posuere lorem ipsum dolor. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor.

Orci porta non pulvinar neque. Habitant morbi tristique senectus et. Tincidunt arcu non sodales neque sodales. Odio facilisis mauris sit amet massa. Pellentesque habitant morbi tristique senectus et netus et malesuada. Dignissim suspendisse in est ante. Tellus in hac habitasse platea dictumst vestibulum. Enim blandit volutpat maecenas volutpat blandit aliquam. Enim ut sem viverra aliquet eget sit amet. Diam donec adipiscing tristique risus. Vulputate dignissim suspendisse in est ante in nibh.

Sit amet consectetur adipiscing elit pellentesque habitant. Consectetur a erat nam at lectus urna. Vulputate dignissim suspendisse in est ante in. Non enim praesent elementum facilisis leo vel fringilla. Magna etiam tempor orci eu lobortis elementum nibh tellus. Urna porttitor rhoncus dolor purus non enim praesent. Id porta nibh venenatis cras. Purus in massa tempor nec feugiat nisl pretium. Velit laoreet id donec ultrices tincidunt arcu non sodales. Ut aliquam purus sit amet luctus. Nisl nisi scelerisque eu ultrices vitae auctor. Quam nulla porttitor massa id neque. Mus mauris vitae ultricies leo integer malesuada nunc. Eget mi proin sed libero enim sed faucibus turpis in.
							</CardBody>
						</Card>
					</Col>
				</Row>
				<div className="app-fixed-footer">
					<span>
						<a href="https://coreui.io">CoreUI</a> &copy; 2018
						creativeLabs.
					</span>
					<span className="ml-auto">
						Powered by{" "}
						<a href="https://coreui.io/react">CoreUI for React</a>
					</span>
				</div>
			</div>
		);
	}
}

export default Company;
