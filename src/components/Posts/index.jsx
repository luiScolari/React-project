import PostCard from '../PostCard';
import './styles.css';
import P from 'prop-types';

export const Posts = ({ posts = [] }) => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: P.array,
};
