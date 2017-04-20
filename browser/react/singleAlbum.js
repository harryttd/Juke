'use strict';
import React from 'react';

const spinner = (
  <div>
    <i className="fa fa-spinner fa-spin fa-1x fa-fw" />
    <span className="sr-only">Loading...</span>
  </div>
);

export default ({ audio, album, toggleSong, currentSong, isPlaying }) => (

  <div className="album col-xs-10">
    <div>
      <h3>{ album.name }</h3>
      <img src={ album.imageUrl } className="img-thumbnail" />
    </div>
    <table className="table">
      <thead>
        <tr>
          <th />
          <th>Name</th>
          <th>Artists</th>
          <th>Genre</th>
        </tr>
      </thead>
      <tbody>
        {
          album.songs && album.songs.map(song => (
            <tr key={ song.id } className={ song.id === currentSong.id ? 'active' : '' } >
              <td>
                <button onClick={() => toggleSong(song) } className="btn btn-default btn-xs">
                  {
                    song.id === currentSong.id && isPlaying && isNaN(audio.duration) ? spinner
                    :
                    <span className={ song.id === currentSong.id && isPlaying ? "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"} />
                  }
                </button>
              </td>
              <td>{ song.name }</td>
              <td>
                <span>
                  { song.artists ? song.artists.map(artist => artist.name).join`, ` : null }
                </span>
              </td>
              <td>{ song.genre }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
);
