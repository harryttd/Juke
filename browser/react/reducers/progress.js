'use strict';

import { 
  SET_PROGRESS,
  CLEAR_PROGRESS
} from '../constants'; 

export default function progress (state = 0, action) {
  switch (action.type) {
    case SET_PROGRESS: return action.progress;
    case CLEAR_PROGRESS: return 0;
    default: return state;
  }
}