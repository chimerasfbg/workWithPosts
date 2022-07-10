import Post from "./Post";
import { useState, useEffect } from "react";

const Home = () => {


  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
        
          return res.json();
        })
        .then((data) => {
          setIsPending(false);
          setData(data);
        
        })
        .catch((err) => {
          console.log(err)
        });
  }, []);


  return (
    <div className="home">
      {isPending && <div>Loading...</div>}
      {data && <Post posts={data} />}
    </div>
  );
};

export default Home;
