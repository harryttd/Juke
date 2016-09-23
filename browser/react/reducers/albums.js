'use strict';

import { RECEIVE_ALBUMS } from '../constants';

const initialAlbums = [];

const convertAlbum = album => {
    album.imageUrl = `/api/albums/${album.id}/image`;
    return album;
};

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

export default function albums (state = initialAlbums, action) {
  switch (action.type) {
    case RECEIVE_ALBUMS: return action.albums.map(convertAlbum);
    default: return state;
  }
}