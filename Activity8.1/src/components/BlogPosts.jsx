import { useEffect, useState } from "react";
import classes from "./BlogPosts.module.css";

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/");
  const blogPosts = await response.json();
  return blogPosts;
}

function BlogPosts({ posts }) {
  return (
    <ul classes={classes.list}>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default BlogPosts;
