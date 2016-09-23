'use strict';

import React, { Component } from 'react';
import SongsContainer from '../containers/SongsContainer';

export default ({ album }) => (
  <div className="album">
    <div>
      <h3>{ album.name }</h3>
      <img src={ album.imageUrl } className="img-thumbnail" />
    </div>
    <SongsContainer songs={album.songs} />
  </div>
);