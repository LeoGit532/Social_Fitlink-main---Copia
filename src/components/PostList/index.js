// PostList.js
import React from 'react';
import Post from '../post/index';

const PostList = ({ posts, handleCommentSubmit }) => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} handleCommentSubmit={handleCommentSubmit} />
      ))}
    </div>
  );
};

export default PostList;
