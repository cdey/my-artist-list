import { combineReducers } from 'redux';
import artist from './Artist.js';
import favorite from './Favorite.js';

const appReducer = combineReducers({
  artist,
  favorite
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
}

export default rootReducer;