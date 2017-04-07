'use strict';
import React from 'react';

export default ({ getAllAlbums }) => (
  <div className="col-xs-2">
    <sidebar>
      <img src="juke.svg" className="logo" />
      <section>
        <h4 className="menu-item active">
          <a onClick={ getAllAlbums }>ALBUMS</a>
        </h4>
      </section>
    </sidebar>
  </div>
);
