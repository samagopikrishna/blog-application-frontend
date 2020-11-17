import { useState, useEffect } from "react";

const useAuthor = () => {
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    fetch("https://aqueous-falls-46282.herokuapp.com/authors")
      .then((res) => res.json())
      .then((data) => setAuthor(data.authors));
  }, []);

  return author;
};

export default useAuthor;
