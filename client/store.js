import { createStore, compse } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers';
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
export const history = syncHistoryWithStore(browserHistory, store);

// Export 
export default store;