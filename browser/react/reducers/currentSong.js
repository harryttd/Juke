'use strict';

import { 
  SET_CURRENT_SONG,
  CLEAR_CURRENT_SONG,
} from '../constants'; 

const initialCurrentSong = {};

export default function currentSong (state = {}, action) {  
  switch (action.type) {
    case SET_CURRENT_SONG: return action.song;
    case CLEAR_CURRENT_SONG: return initialCurrentSong;
    default: return state;
  }
}
