import React from 'react';

export default function Post({ title, content, points, comments }) {
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