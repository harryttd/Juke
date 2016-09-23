'use strict';

import { 
  SET_LIST,
  CLEAR_LIST,
} from '../constants'; 

const initialSongList = [];

export default function songList (state = initialSongList, action) {
  switch (action.type) {
    case SET_LIST: return action.songList;
    case CLEAR_LIST: return initialSongList;
    default: return state;
  }
}
