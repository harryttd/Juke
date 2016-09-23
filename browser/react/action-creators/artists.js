'use strict';

import axios from 'axios';
import { RECEIVE_ARTISTS, RECEIVE_ARTIST } from '../constants';
import { switchLocation } from './location';

export const receiveArtists = artists => ({
  type: RECEIVE_ARTISTS,
  artists
});

export const receiveArtist = (artist, songs, albums) => ({
  type: RECEIVE_ARTIST,
  artist,
  songs,
  albums
});

export const fetchAndGoToArtist = artist =>
  dispatch => {
    let url = `/api/artists/${artist.id}`;

    Promise.all([
      axios.get(url),
      axios.get(`${url}/songs`),
      axios.get(`${url}/albums`)
    ])
    .then(res => res.map(r => r.data))
    .then(results => {
      dispatch(receiveArtist(...results));
      dispatch(switchLocation('artist'));
    });
  };