'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Album extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		return (
			<div>
			{
				this.props.albums.map((album) => {
					return (
						<div key={album.id} className="col-xs-4 responsive">
						<a className="thumbnail" href="#" onClick={() => props.handleClick(album)}>
						<img src={album.imageUrl}/>
						<div className="caption">
						<h5>
						<span>{album.name}</span>
						</h5>
						<small>{album.songs.length} songs</small>
						</div>
						</a>
						</div>
						)
					})
				}
				</div>
				)
				}
			}


			export default Album;
