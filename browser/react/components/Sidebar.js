'use strict';

import React from 'react';

export default ({ go }) => (
  <sidebar>
    <img src="juke.svg" className="logo" />
    <section>
      <h4 className="menu-item active">
        <a href="#" onClick={go}>ALBUMS</a>
      </h4>
    </section>
  </sidebar>
);