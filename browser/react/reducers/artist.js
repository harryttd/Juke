'use strict';

import { RECEIVE_ARTIST } from '../constants';

const initialArtist = {};

const convertAlbum = album => {
    album.imageUrl = `/api/albums/${album.id}/image`;
    return album;
};

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertArtist = ({ artist, songs, albums }) => {
  songs = songs.map(convertSong);
  albums = albums.map(convertAlbum);
  artist.songs = songs;
  artist.albums = albums;
  return artist;
};

export default function artist (state = initialArtist, action) {
  switch (action.type) {
    case RECEIVE_ARTIST: return convertArtist(action);
    default: return state;
  }
}