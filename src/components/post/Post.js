import React from 'react';
import './Post.css';
import { upVoteIcon, downVoteIcon, commentIcon, shareIcon, optionsIcon } from '../../resources/icons.js';
export default function Post({ post }) {
  const { title, content, points, comments } = post;
  return (
    <div className='post'>
        <div className='postHeader'>
          <p className='subreddit'>r/{post.subreddit}</p>
          <p className='user'>Posted by u/{post.user}</p>
        </div>
        <h1 className='postTitle'>{title}</h1>
        <p className='postContent'>{content}</p>
        <div className='utility'>
          <div className='utilityGroup'>
            <div className='upVoteButton'>{upVoteIcon()}</div>
            <p className='points'>{points}</p>
            <div className='downVoteButton'>{downVoteIcon()}</div>
            <div className='utilityGroup comments'>
            {commentIcon()}
            <p>{comments.length}</p>
          </div> 
          </div>
             
          <div className='utilityGroup'>
            <div className='shareButton'>
              {shareIcon()}
            </div>
            <div className='optionsButton'>
              {optionsIcon()}
            </div>  
          </div>
        </div>
    </div>
  );
}