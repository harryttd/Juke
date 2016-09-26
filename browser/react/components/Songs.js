'use strict';

import React, { Component } from 'react';

export default ({ songs, currentSong, isPlaying, toggle }) => (
<table className='table'>
  <thead>
    <tr>
      <th></th>
      <th>Name</th>
      <th>Artists</th>
      <th>Genre</th>
    </tr>
  </thead>
  <tbody>
    {
      songs.map(song => (
        <tr key={song.id}>
          <td>
            <button className="btn btn-default btn-xs" onClick={() => toggle(song, songs)}>
              <span className={song.id === currentSong.id && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"}></span>
            </button>
          </td>
          <td>{ song.name }</td>
          <td>
            <span>{ song.artists ? song.artists.map(artist => artist.name).join(', ') : null }</span>
          </td>
          <td>{ song.genre }</td>
        </tr>
      ))
    }
  </tbody>
</table>
);