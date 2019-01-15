// * Reducers takes in two things 
// 1. The action (info on what happened)
// 2. copy the current state 
// Every reducer runs when you use dispatch

function postComments(state = [], action) {
  switch(action.type){
    case 'ADD_COMMENT':
    // Return state with new state
      return [...state, {
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      return [
        // From the start of the arr
        ...state.slice(0, action.i),
        // after the deleted one
        ...state.slice(action.i + 1)
      ];
    default:
      return state;
  }
}

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined'){
    return {
      // Current state
      ...state,
      // Overwrite
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}

export default comments;