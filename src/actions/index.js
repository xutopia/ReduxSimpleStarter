import axios from 'axios';
import API_KEY from '../config/youtube';

export const FETCH_VIDEOS = 'FETCH_VIDEOS';

const ROOT_URL = 'https://googleapis.com/youtube/v3/search?part=snippet&type=video'
const API = `&key=${API_KEY}`;

export function fetchVideos(term) {
  const request = axios.get(`${ROOT_URL}${API}&q=${term}`);

  return {
    type: FETCH_VIDEOS,
    payload: request
  }
}
