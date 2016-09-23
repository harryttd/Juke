'use strict';

import { connect } from 'react-redux';
import { startSong, pause, play } from '../action-creators/player';
import Songs from '../components/Songs';

const mapStateToProps = ({ isPlaying, currentSong }, { songs }) => ({
  isPlaying,
  currentSong,
  songs
});

const mapDispatchToProps = dispatch => ({
  toggle (selectedSong, selectedSongList, currentSong, isPlaying) {
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else if (isPlaying)
      dispatch(pause());
    else 
      dispatch(play());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Songs);