import React from 'react';
import {Photo} from './Photo';
import Comments from './Comments';

export const Single = (props) => {
  // index of post 
  const { postId } = props.params;
  // get post
  const i = props.posts.findIndex((post) => post.code === postId);
  const post = props.posts[i];
  // Find comments 
  const postComments = props.comments[postId] || [];
  return(
    <div className="single-photo">
      <Photo i={i} post={post} {...props}/>
      <Comments postComments={postComments} {...props}/>
    </div>
  )
}