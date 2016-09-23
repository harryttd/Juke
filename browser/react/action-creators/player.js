'use strict';

import {
  START_PLAYING,
  STOP_PLAYING,
  SET_CURRENT_SONG,
  CLEAR_CURRENT_SONG,
  SET_LIST,
  CLEAR_LIST,
  SET_PROGRESS,
  CLEAR_PROGRESS
} from '../constants';

import AUDIO from '../audio';

const startPlaying = () => ({
  type: START_PLAYING
});

const stopPlaying = () => ({
  type: STOP_PLAYING
});

export const setCurrentSong = song => ({
  type: SET_CURRENT_SONG,
  song
});

export const clearCurrentSong = () => ({
  type: CLEAR_CURRENT_SONG
});

export const setList = songList => ({
  type: SET_LIST,
  songList
});

export const clearList = () => ({
  type: CLEAR_LIST
});

export const setProgress = progress => ({
  type: SET_PROGRESS,
  progress
});

export const clearProgress = () => ({
  type: CLEAR_PROGRESS
});

export const pause = () => dispatch => {
  AUDIO.pause();
  dispatch(stopPlaying());
};

export const play = () => dispatch => {
  AUDIO.play();
  dispatch(startPlaying());
};

const load = (song, list) => dispatch => {
  AUDIO.src = song.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSong(song));
  dispatch(setList(list));
};

export const startSong = (song, list) =>
  dispatch => {
    dispatch(pause());
    dispatch(load(song, list));
    dispatch(play());
  };

const mod = (num, m) =>((num % m) + m) % m;

const skip = (interval, { currentSongList, currentSong }) => {
  let idx = currentSongList.map(song => song.id).indexOf(currentSong.id);
  idx = mod(idx + interval, currentSongList.length);
  const next = currentSongList[idx];
  return [next, currentSongList];
};

export const nextSong = () => (dispatch, getState) => {
  dispatch(startSong(...skip(1, getState())));
};

export const prevSong = () => (dispatch, getState) => {
  dispatch(startSong(...skip(-1, getState())));
};

export const seek = decimal => dispatch => {
  AUDIO.currentTime = AUDIO.duration * decimal;
  dispatch(setProgress(AUDIO.currentTime / AUDIO.duration));
};