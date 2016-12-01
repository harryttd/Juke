'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class Albums extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const albumElements = this.props.albums.map(album => {
			return (
				<div key={album.id} className="col-xs-4">
					<a className="thumbnail" href="#" onClick={() => this.props.clickHandler(album)}>
						<img src={album.imageUrl}/>
						<div className="caption">
							<h5>
								<span>{album.name}</span>
							</h5>
							<small>{album.songs.length} songs</small>
						</div>
					</a>
				</div>
			);
		});
		return (
			<div>
				<h3>Albums</h3>
				<div className="row">
					{albumElements}
				</div>
			</div>
		);
	}
}

export default Albums;
