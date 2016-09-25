'use strict';

import React, { Component } from 'react';
import axios from 'axios';

import initialState from '../initialState';
import AUDIO from '../audio';

import Sidebar from '../components/Sidebar';
import Albums from '../components/Albums';
import Album from '../components/Album';
import PlayerContainer from '../containers/PlayerContainer';

const convertAlbum = album => {
    album.imageUrl = `/api/albums/${album.id}/image`;
    return album;
};

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;
    this.go = this.go.bind(this);
  }

  componentDidMount () {    
    axios
      .get('/api/albums').then(res => res.data)
      .then(albums => albums.map(convertAlbum))
      .then(albums => this.onLoad(albums));
  }

  onLoad (albums) {
    this.setState({ albums });    
  }

  go (album) {
    this.setState({ album });
  }

  toggle () {

  }

  setProgress (progress) {
    this.setState({ progress });
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar go={() => this.go(initialState.album)} />
        </div>
        <div className="col-xs-10">
          {
            !!this.state.album.id ?
            <Album 
              album={this.state.album} 
              currentSong={this.state.currentSong}
              isPlaying={this.state.isPlaying}
              toggle={this.toggle} 
            /> :
            <Albums albums={this.state.albums} go={this.go} />
        }
        </div>
        <PlayerContainer
          currentSong={this.state.currentSong}
          currentSongList={this.state.currentSongList}
          isPlaying={this.state.isPlaying} 
        />
      </div>
    );
  }
}