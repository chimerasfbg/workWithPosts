import Post from "./Post";
import useFetch from "./useFetch";

const Home = () => {
  const {
    error,
    isPending,
    data: posts,
  } = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {posts && <Post posts={posts} />}
    </div>
  );
};

export default Home;
