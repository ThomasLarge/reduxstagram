// * Reducers takes in two things 
// 1. The action (info on what happened)
// 2. copy the current state

function comments(state = [], action) {
  console.log(state, action);
  return state;
}

export default comments;