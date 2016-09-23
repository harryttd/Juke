'use strict';

import React, { Component } from 'react';

export default ({ artists, go }) => (
  <div>
    <h3>Artists</h3>
      <div className="list-group">
      {
        artists.map(artist => (
          <div className="list-group-item" key={ artist.id }>
            <a href="#" onClick={() => go(artist)}>{ artist.name }</a>
          </div>
        ))
      }
    </div>
  </div>
);