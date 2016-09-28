'use strict';

import React from 'react';
import Songs from '../components/Songs';

export default ({ album, currentSong, isPlaying, toggle }) => (
  <div className="album">
    <div>
      <h3>{ album.name }</h3>
      <img src={ album.imageUrl } className="img-thumbnail" />
    </div>
    <Songs 
      songs={album.songs}
      currentSong={currentSong} 
      isPlaying={isPlaying} 
      toggle={toggle} />
  </div>
);