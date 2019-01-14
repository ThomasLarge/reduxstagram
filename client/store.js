import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { broswerHistory } from 'react-router';

import { rootReducer } from './reducers';
import comments from './data/comments';
import posts from './data/posts';

// Default data 
const defaultState = {
  posts,
  comments
}

// Create store
const store = createStore(rootReducer, defaultState);

// Link broswer history with store 
export const history = syncHistoryWithStore(broswerHistory, store);

// Export 
export default store;