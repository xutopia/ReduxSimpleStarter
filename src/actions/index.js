import axios from 'axios';
import {YOUTUBE_API_KEY} from '../config/youtube.js';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
export const SELECT_VIDEO = 'SELECT_VIDEO';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video'
const API = `&key=${YOUTUBE_API_KEY}`;

export function fetchVideos(term) {
  const request = axios.get(`${ROOT_URL}${API}&q=${term}`);

  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}

export function selectVideo(id) {
  return {
    type: SELECT_VIDEO,
    payload: id
  }
}
