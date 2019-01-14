// * Actions are triggered when the user clicks or does something to the app
// * Events that fire off to the store

// Increment 
export function increment(index){
  return {
    type: 'INCERMENTS_LIKES',
    index
  }
}

// Add comment 
export function addComment({postId, author, comment}){
  return {
    type: 'ADD_COMMENT',
    postId, 
    author, 
    comment
  }
}

// Remove comment
export function removeComment({postId, i}){
  return {
    type: 'REMOVE_COMMENT',
    postId, 
    i
  }
}
