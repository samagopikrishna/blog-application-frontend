import { useState, useEffect } from "react";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-falls-46282.herokuapp.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts));
  }, []);

  return posts;
};

export default usePosts;
