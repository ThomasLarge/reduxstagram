import React from 'react';
import { Photo } from './Photo';

export const PhotoGrid = (props) => {
  return(
    <div className="photo-grid">
      {props.posts.map((post, i) => <Photo key={i} i={i} {...props} post={post} />)}
    </div>
  )
}