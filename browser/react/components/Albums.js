'use strict';

import React from 'react';
import axios from 'axios';

const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};

const fetchAlbum = (album, callback) => {
  return axios
    .get(`/api/albums/${album.id}`)
    .then(res => res.data)
    .then(album => convertAlbum(album))
    .then(album => callback(album));
};

export default ({ albums, go }) => (
  <div>
    <h3>Albums</h3>
    <div className="row">
      {
        albums.map(album => (
          <div className="col-xs-4" key={ album.id }>
            <a className="thumbnail" href="#" onClick={() => fetchAlbum(album, go)}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </a>
          </div>
        ))
      }
    </div>
  </div>
);