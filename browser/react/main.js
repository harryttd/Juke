'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.js';
import Footer from './footer.js';

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state= {foo: 'bar'}
	}
	render() {
		return ( 
				<div >
					<Sidebar />
						 <h1>Hello world! {JSON.stringify(this.state)}</h1>
					<Footer />
				</div>

				)
			}

	}


export default Main;

//<h1>Hello world! {JSON.stringify(this.state)}</h1>
//id="main" className="container-fluid"