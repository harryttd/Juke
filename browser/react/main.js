'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.js';
import Footer from './footer.js';
import Album from './album.js';

class Main extends React.Component {
	constructor(props){
		super(props);
	}
	render() {
		return ( 
				<div >
					<Sidebar />


								  

								  <Album albumNum="0"/>

								 


					<Footer />
				</div>

				)
			}

	}


export default Main;













//<h1>Hello world! {JSON.stringify(this.state)}</h1>
//id="main" className="container-fluid"