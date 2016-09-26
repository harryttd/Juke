'use strict';

import React, { Component } from 'react';

import initialState from '../initialState';
import AUDIO from '../audio';

import Sidebar from '../components/Sidebar';
import Albums from '../components/Albums';
import Album from '../components/Album';
import Player from '../components/Player';

const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  return album;
};

const mod = (num, m) =>((num % m) + m) % m;

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};

export default class AppContainer extends Component {

  constructor (props) {
    super(props);
    this.state = initialState;
    
    this.go = this.go.bind(this);
    this.toggle = this.toggle.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }

  componentDidMount () {
    fetch('/api/albums')
      .then(res => res.json())
      .then(albums => albums.map(convertAlbum))
      .then(albums => this.onLoad(albums));
    
    AUDIO.addEventListener('ended', () => 
      this.next());
    AUDIO.addEventListener('timeupdate', () => 
      this.setProgress(AUDIO.currentTime / AUDIO.duration));
  }

  onLoad (albums) {
    this.setState({ albums });    
  }

  play () {
    AUDIO.play();
    this.setState({ isPlaying: true });
  }

  pause () {
    AUDIO.pause();
    this.setState({ isPlaying: false });
  }

  load (currentSong, currentSongList) {
    AUDIO.src = currentSong.audioUrl;
    AUDIO.load();
    this.setState({ currentSong, currentSongList });
  }

  go (selectedAlbum) {
    this.setState({ selectedAlbum });
  }

  startSong (song, list) {
    this.pause();
    this.load(song, list);
    this.play();
  }

  toggle () {
    if (this.state.isPlaying) this.pause();
    else this.play();
  }

  next () {
    this.startSong(...skip(1, this.state));
  }

  prev () {
    this.startSong(...skip(-1, this.state));
  }

  seek (decimal) {
    AUDIO.currentTime = AUDIO.duration * decimal;
    this.setProgress(AUDIO.currentTime / AUDIO.duration);
  }

  setProgress (progress) {
    this.setState({ progress });
  }

  render () {
    return (
      <div id="main" className="container-fluid">
        <div className="col-xs-2">
          <Sidebar go={() => this.go(initialState.selectedAlbum)} />
        </div>
        <div className="col-xs-10">
          {
            !!this.state.selectedAlbum.id ?
            <Album 
              album={this.state.selectedAlbum} 
              currentSong={this.state.currentSong}
              isPlaying={this.state.isPlaying}
              toggle={
                (selectedSong, selectedSongList) => {
                  if (selectedSong.id !== this.state.currentSong.id)
                    this.startSong(selectedSong, selectedSongList);
                  else this.toggle();
                }
              }
            /> :
            <Albums albums={this.state.albums} go={this.go} />
        }
        </div>
        <Player
          currentSong={this.state.currentSong}
          currentSongList={this.state.currentSongList}
          isPlaying={this.state.isPlaying}
          progress={this.state.progress}
          next={this.next}
          prev={this.prev}
          toggle={this.toggle}
          scrub={evt => this.seek(evt.nativeEvent.offsetX / evt.target.clientWidth)} 
        />
      </div>
    );
  }
}