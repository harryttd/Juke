'use strict';
import React from 'react';
import ReactDOM from 'react-dom';

class SingleAlbum extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		console.log(this.props);
		const album = this.props.album;
		return (
			<div className="album col-xs-10">
				<div>
					<h3>{album.name}</h3>
					<img src={album.imageUrl} className="img-thumbnail" />
				</div>
				<table className='table'>
					<thead>
						<tr>
							<th></th>
							<th>Name</th>
							<th>Artists</th>
							<th>Genre</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<button className="btn btn-default btn-xs">
									<span className="glyphicon glyphicon-play"></span>
								</button>
							</td>
							<td>I SHOULD BE A SONG NAME</td>
							<td>I SHOULD BE A STRING OF THIS SONG'S ARTISTS</td>
							<td>I SHOULD BE A SONG GENRE</td>
						</tr>
					</tbody>
				</table>
			</div>
		)

	}
}

export default SingleAlbum;
