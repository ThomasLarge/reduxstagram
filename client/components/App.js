import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import { Main } from './Main';

// * add all state to props
function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

// * add all actions to props
function mapDispachToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export const App = connect(mapStateToProps, mapDispachToProps)(Main);