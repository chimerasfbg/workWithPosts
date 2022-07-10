import { useState, useEffect } from "react";
import { PostsData } from "./Posts";

const useFetch = (url: string) => {
  const [data, setData] = useState<PostsData>();
  const [isPending, setIsPending] = useState(true);


  useEffect(() => {

      fetch(url)
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
  }, [url]);

  return { data, isPending };
};

export default useFetch;
