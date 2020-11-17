import React from "react";
import "./styles.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Authors from "./pages/Author.js";
import Home from "./pages/Home.js";
import PostPage from "./pages/PostPage";
import PostForm from "./pages/AddPost.js";
export default function App() {
  return (
    <>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/posts/:id">
          <PostPage />
        </Route>

        <Route excat path="/authors">
          <Authors />
        </Route>

        <Route path="/add-post">
          <PostForm />
        </Route>
      </Switch>
    </>
  );
}
