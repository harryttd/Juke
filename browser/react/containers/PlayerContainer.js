'use strict';

import { connect } from 'react-redux';
import Player from '../components/Player';
import { nextSong, prevSong, pause, play, seek } from '../action-creators/player';

const mapStateToProps = ({ currentSong, currentSongList, isPlaying, progress }) => ({
  currentSong,
  currentSongList,
  isPlaying,
  progress
});

const mapDispatchToProps = dispatch => ({
  next: () => dispatch(nextSong()),
  prev: () => dispatch(prevSong()),
  toggle: isPlaying => isPlaying ? dispatch(pause()) : dispatch(play()),
  scrub: evt => dispatch(seek(evt.nativeEvent.offsetX / evt.target.clientWidth))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);