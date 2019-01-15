import React, { Component } from 'react';

export default class Comments extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  }

  render(){
    const { postComments, removeComment, params } = this.props;
    return(
      <div className="comments">
        {postComments.map((comment, i) => {
          return (
            <div className="comment" key={i}>
              <p>
                <strong>{comment.user}</strong>
                {comment.text}
                <button onClick={() => removeComment(params.postId, i)} className="remove-comment">&times;</button>
              </p>
              
            </div>
          )
        })}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="author" placeholder="author"/>
          <input type="text" ref="comment" placeholder="comment"/>
          <input type="submit" hidden/>
        </form>
      </div>
    )
  }
}
  
  
