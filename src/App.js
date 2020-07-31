import React from "react";
import "./App.css";
import logo from "./rajlogo.jpg";
function App() {
	return (
		<div className='container'>
			<img style={{ height: "50px", width: "80px" }} src={logo} />
			<div className='centered'>
				<div className='firstLine'>
					We are building something amazing. Stay tuned for updates.
				</div>
				<div className='secondLine'>
					We can't wait to help you again with your dream home!
				</div>
				<div className='thirdLine'>
					For enquiries please contact us at sales@rajrealtygroup.com or call
					+91 9833758827
				</div>
			</div>
		</div>
	);
}

export default App;
