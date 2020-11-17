import React, { useState, useEffect } from "react";
import useAuthor from "../hooks/useAuthor.js";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { useHistory } from "react-router-dom";
const PostForm = () => {
  const history = useHistory();
  const authors = useAuthor();
  const [loading, setLoading] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [textAreaError, setTextAreaError] = useState(false);
  const [title, setTitle] = useState("");
  const [author1, setAuthors] = useState("");
  const [textarea, setTextarea] = useState("");
  const onTitleChange = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const onTextareaChange = (e) => {
    console.log(e.target.value);
    setTextarea(e.target.value);
  };

  const selected = (e) => {
    console.log(e.target.value);
    setAuthors(e.target.value);
  };
  const submitPost = () => {
    if (title === "") {
      setTitleError(true);
    }
    if (textarea.length < 200) {
      setTextAreaError(true);
    } else {
      setLoading(true);
      setTextAreaError(false);
      setTitleError(false);

      var postDetails = {
        title: title,
        author: author1,
        content: textarea
      };

      fetch("https://aqueous-falls-46282.herokuapp.com/posts/postDetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postDetails)
      }).then(() => {
        setLoading(false);

        history.push(`/`);
      });
    }
  };
  return (
    <Form>
      <FormGroup>
        <Label for="title">Title</Label>
        <Input
          type="title"
          name="title"
          id="title"
          placeholder="Enter a Title for Post"
          value={title}
          onChange={onTitleChange}
        />
        <div style={{ color: "red" }}>
          {titleError ? "title should not be empty" : null}
        </div>
      </FormGroup>

      <FormGroup>
        <Label for="authors">Authors</Label>
        <Input
          type="select"
          name="authors"
          id="authors"
          onChange={selected}
          value={author1}
        >
          {authors.map((author, index) => {
            return <option key={index}>{author.name}</option>;
          })}
        </Input>
      </FormGroup>

      <FormGroup>
        <Label for="exampleText">Text Area</Label>
        <Input
          type="textarea"
          name="text"
          id="textarea"
          value={textarea}
          onChange={onTextareaChange}
        />
        <div style={{ color: "red" }}>
          {textAreaError
            ? "text area should not be empty should be min 200 words"
            : null}
        </div>
      </FormGroup>
      <Button onClick={submitPost}>Submit</Button>

      <h4 loadingclassName="loading" style={{ color: "red" }}>
        {loading ? "Loading..." : null}
      </h4>
    </Form>
  );
};

export default PostForm;
