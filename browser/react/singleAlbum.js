'use strict';
import React from 'react';

export default ({ album, toggleSong, currentSong, isPlaying }) => (

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
                  <span className={
                      song.id === currentSong.id && isPlaying ?  "glyphicon glyphicon-pause" : "glyphicon glyphicon-play"
                    }
                  />
                </button>
              </td>
              <td>{ song.name }</td>
              <td>
                <span>
                  { song.artists ? song.artists.map(artist => artist.name).join(', ') : null }
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
