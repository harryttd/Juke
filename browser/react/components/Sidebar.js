'use strict';

import React from 'react';

export default ({ go, location }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className={location.match('album') ? 'menu-item active' : 'menu-item'}>
        <a href="#" onClick={() => go('albums')}>ALBUMS</a>
      </h4>
    </section>
    <section>
      <h4 className={location.match('artist') ? 'menu-item active' : 'menu-item'}>
        <a href="#" onClick={() => go('artists')}>ARTISTS</a>
      </h4>
    </section>
  </sidebar>
);