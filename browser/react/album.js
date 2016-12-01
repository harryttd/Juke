'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Album extends React.Component {
	constructor(props){
		super(props);
	}

	albumNames(){
		return this.props.albums.map(album => {
			return album.name;
		});
	}

	countSongs(){
		const counter = []
		this.props.albums.forEach(album => {
			counter.push(album.songs.length)
		});
		return counter;

	}
	render() {
		return (
			<div className="col-xs-4">
				<a className="thumbnail" href="#">
					<img src="http://placeholdit.imgix.net/~text?txtsize=33&txt=ALBUMtwoIMAGE&w=300&h=300" />
					<div className="caption">
						<h5>
							<span>{this.albumNames()[this.props.albumNum]}</span>
						</h5>
						<small>{this.countSongs()[this.props.albumNum]} songs</small>
					</div>
				</a>
			</div>
		)
	}
}

export default Album;
