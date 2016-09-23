'use strict';

import { RECEIVE_ARTISTS } from '../constants';

const initialArtists = [];

export default function artists (state = initialArtists, action) {
  switch (action.type) {
    case RECEIVE_ARTISTS: return action.artists;
    default: return state;
  }
}