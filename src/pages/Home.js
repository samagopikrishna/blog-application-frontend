import React from "react";
import Post from "../components/Post";
import usePosts from "../hooks/usePosts";

const Home = () => {
  const posts = usePosts();

  return (
    <div className="container">
      {posts.map((post, index) => {
        return (
          <Post
            id={post._id}
            key={index}
            title={post.title}
            author={post.author.name}
            content={post.content}
            isSummary
          />
        );
      })}
    </div>
  );
};

export default Home;
