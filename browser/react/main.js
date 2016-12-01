'use strict';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Sidebar from './sidebar.js';
import Footer from './footer.js';
import Albums from './album.js';
import SingleAlbum from './singleAlbum.js';

class Main extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			library: [],
      selectedAlbum: {}
    };
    this.handleClick = this.handleClick.bind(this)
	}

  handleClick(album){
  	this.setState({selectedAlbum: album});
	}

	componentDidMount() {
		axios.get('api/albums')
		.then(albums => albums.data)
    .then(libraryFromServer => {
      libraryFromServer = libraryFromServer.map(library => {
        library.imageUrl = `/api/albums/${library.id}/image`;
        return library;
      });
      this.setState({ library: libraryFromServer });
    })
		.catch(console.error.bind(console));
  }

	render() {
		return (
			<div id="main" className="container-fluid">
	      <div className="col-xs-2">
					<Sidebar />
				</div>

				<div className="col-xs-10" >
					{
						this.state.selectedAlbum.id
						?
							<SingleAlbum album={this.state.selectedAlbum}/>
						:
							<Albums albums={this.state.library} clickHandler={this.handleClick} />
					}
				</div>

				<Footer />

		</div>
		)
	}
}

export default Main;

// const fakeAlbums = [{
//   name: 'Abbey Road',
//   id: 1,
//   imageUrl: 'http://fillmurray.com/300/300',
//   songs: [{
//     id: 1,
//     name: 'Romeo & Juliette',
//     artists: [{name: 'Bill'}],
//     genre: 'Funk',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }, {
//     id: 2,
//     name: 'White Rabbit',
//     artists: [{name: 'Bill'}, {name: 'Alice'}],
//     genre: 'Fantasy',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }, {
//     id: 3,
//     name: 'Lucy in the Sky with Diamonds',
//     artists: [{name: 'Bob'}],
//     genre: 'Space',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }]
// },
// {
//   name: 'Yellow Submarine',
//   id: 2,
//   imageUrl: 'http://fillmurray.com/300/300',
//   songs: [{
//     id: 4,
//     name: 'London Calling',
//     artists: [{name: 'Bill'}],
//     genre: 'Punk',
//     audioUrl: 'https://learndotresources.s3.amazonaws.com/workshop/5616dbe5a561920300b10cd7/Dexter_Britain_-_03_-_The_Stars_Are_Out_Interlude.mp3'
//   }]
// }];
