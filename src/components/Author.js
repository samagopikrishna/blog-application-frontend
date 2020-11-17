import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const Author = () => {
  const [author, setAuthor] = useState({});
  const [post, setPosts] = useState([]);

  const { params } = useRouteMatch();

  useEffect(() => {
    fetch(`https://aqueous-falls-46282.herokuapp.com/authors/${params.authorId}`)
      .then((res) => res.json())
      .then((data) => {
        setAuthor(data.author);
        setPosts(data.authorPosts);
      });
  }, [params]);

  return (
    <>
      <p>{author.name}</p>

      <ul>
        {post.map((post, index) => {
          return (
            <li key={index}>
              <p>{post.title}</p>
              <p>{post.content}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Author;
