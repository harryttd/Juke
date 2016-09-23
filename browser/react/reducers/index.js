'use strict';

import { combineReducers } from 'redux';

import albums from './albums';
import album from './album';
import artists from './artists';
import artist from './artist';
import location from './location';
import currentSong from './currentSong';
import currentSongList from './currentSongList';
import progress from './progress';
import isPlaying from './isPlaying';

const rootReducer = combineReducers({
  albums,
  album,
  artists,
  artist,
  location,
  currentSong,
  currentSongList,
  progress,
  isPlaying
});

export default rootReducer;