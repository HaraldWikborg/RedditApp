import React from 'react';
import './Post.css';
export default function Post({ post }) {
  const { title, content, points, comments } = post;
  return (
    <div className='post'>
        <h1 className='postTitle'>{title}</h1>
        <p className='postContent'>{content}</p>
        <div className='utility'> 
            <p>{points} points</p>
            <p>{comments.length} comments</p>
        </div>
    </div>
  );
}