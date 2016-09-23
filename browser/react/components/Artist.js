'use strict';

import React, { Component } from 'react';
import SongsContainer from '../containers/SongsContainer';

export default ({ artist, go }) => (
  <div>
    <h3>{ artist.name }</h3>
    <h3>Albums</h3>
    <div className="row">
      <div className="col-xs-4">
        {
          artist.albums.map(album => (
            <a className="thumbnail" href="#" key={album.id} onClick={() => go(album)}>
              <img src={ album.imageUrl } />
              <div className="caption">
                <h5>
                  <span>{ album.name }</span>
                </h5>
                <small>{ album.songs.length } songs</small>
              </div>
            </a>
          ))
        }
      </div>
    </div>
    <SongsContainer songs={artist.songs} />
  </div>
);