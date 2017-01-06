'use strict';
import React from 'react';

export default ({ currentSong, toggleSong, next, prev, stop, isPlaying, progress }) => (

	<footer>

		<div className="pull-left" style={ currentSong.id ? null : { pointerEvents: 'none', opacity: 0.4 }}>
			<button onClick={ prev } className="btn btn-default">
				<span className="glyphicon glyphicon-step-backward" />
			</button>
			<button onClick={ () => toggleSong(currentSong) } className="btn btn-default">
				<span className={ currentSong && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play" } />
			</button>
		<button onClick={ stop } className="btn btn-default">
			<span className="glyphicon glyphicon-stop" />
		</button>
			<button onClick={ next } className="btn btn-default">
				<span className="glyphicon glyphicon-step-forward" />
			</button>
		</div>

		<div className="bar">
			<div className="progress">
				<div className="progress-bar" style={{ width: `${progress}%` }} />
			</div>
		</div>

	</footer>
);

// class Footer extends React.Component {
//
// 	render() {
// 		const { currentSong, toggleSong, next, prev, isPlaying, progress } = this.props;
//
// 		return (
//
// 		);
// 	}
// }
//
// export default Footer;
