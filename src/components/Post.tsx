import { Link } from 'react-router-dom';
import { PostsData } from './Posts';

interface Posts {
  posts: PostsData[],
}


const Post = ({ posts }: Posts) => {
  return (
    <div className="post-list">
      {posts.map(post => (
        <div className="post-preview" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default Post;