'use strict';

import {
  START_PLAYING,
  STOP_PLAYING,
} from '../constants';

export default function isPlaying (state = false, action) {
  switch (action.type) {
    case START_PLAYING: return true;
    case STOP_PLAYING: return false;
    default: return state;
  }
}
