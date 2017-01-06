import axios from 'axios';
import {YOUTUBE_API_KEY} from '../config/youtube.js';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';
const ROOT_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video'
const API = `&key=${YOUTUBE_API_KEY}`;

export function fetchVideos(term) {
  const request = axios.get(`${ROOT_URL}${API}&q=${term}`);

  request.then((data) => {
    console.log('inside the then of my promise: ', data);
  })
  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}
