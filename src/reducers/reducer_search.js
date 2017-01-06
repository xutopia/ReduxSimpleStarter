import {FETCH_VIDEOS} from '../actions/index';
const INITIAL_STATE = {videos: [], video: null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_VIDEOS:
    console.log('did this case hit?', action.payload);
      return {...state, videos: action.payload.data.items, video: action.payload.data.items[0]};
    default:
      return state;
  }
}
