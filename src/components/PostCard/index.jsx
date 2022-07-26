import React from 'react';
import './styles.css';
import P from 'prop-types';

const PostCard = ({ post }) => {
  return (
    <div className="post">
      <img src={post.cover} alt={post.title} />
      <div className="post-content">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

PostCard.propTypes = {
  post: P.object,
};

export default PostCard;
