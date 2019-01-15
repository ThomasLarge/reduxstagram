// * Reducers takes in two things 
// 1. The action (info on what happened)
// 2. copy the current state
// Every reducer runs when you use dispatch

function posts(state = [], action) {
  switch(action.type){
    case 'INCERMENTS_LIKES':
    const i = action.index;
    return [
      ...state.slice(0, i), // before the one we are updating
      {...state[i], likes: state[i].likes + 1},
      ...state.slice(i + 1), // after the one we are updating
    ]
    
    default:
      return state;
  }
}

export default posts;