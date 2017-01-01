import {combineReducers} from 'redux';
import SearchReducer from './reducer_search';

const rootReducer = combineReducers({
  videos: SearchReducer
});

export default rootReducer;
