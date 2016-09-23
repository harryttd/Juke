'use strict';

import { RECEIVE_ALBUM } from '../constants';

const initialAlbum = {};

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

export default function album (state = initialAlbum, action) {
  switch (action.type) {
    case RECEIVE_ALBUM: return convertAlbum(action.album);
    default: return state;
  }
}