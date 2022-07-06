import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("https://jsonplaceholder.typicode.com/posts/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="post-details">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Written by {post.body}</p>
          <div>{post.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
