'use strict';

import React, { Component } from 'react';
import Player from '../components/Player';
import AUDIO from '../audio';

export default class PlayerContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      progress: 0
    };
  }

  componentDidMount () {
    AUDIO.addEventListener('ended', () => 
      this.next());
    AUDIO.addEventListener('timeupdate', () => 
      this.setProgress(AUDIO.currentTime / AUDIO.duration));
  }

  setProgress () {
    
  }

  next () {

  }

  prev () {

  }

  toggle () {

  }

  scrub () {

  }

  render () {
    return (
      <Player 
        next={() => next()}
        prev={() => prev()}
        toggle={() => toggle()}
        toggle={() => scrub()}
        {...this.props}
      />
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   next: () => dispatch(nextSong()),
//   prev: () => dispatch(prevSong()),
//   toggle: isPlaying => isPlaying ? dispatch(pause()) : dispatch(play()),
//   scrub: evt => dispatch(seek(evt.nativeEvent.offsetX / evt.target.clientWidth))
// });
