import { combineReducers } from 'redux';
import { routerReducers } from 'react-router-redux';
import { posts } from './posts';
import { comments } from './comments';

export default rootReducers = combineReducers({posts, comments, router: routerReducers});