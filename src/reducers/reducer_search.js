import {FETCH_VIDEOS, SELECT_VIDEO} from '../actions/index';
const INITIAL_STATE = {videos: [], video: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_VIDEOS:
      return {...state, videos: action.payload.data.items, video: action.payload.data.items[0]};
    case SELECT_VIDEO:
      return {...state, video: state.videos[action.payload]};
    default:
      return state;
  }
}
