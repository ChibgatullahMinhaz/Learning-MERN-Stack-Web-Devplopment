import React, { Suspense, useEffect, useState } from "react";
import Post from "./Post";
const fetchPost = fetch("https://jsonplaceholder.typicode.com/posts").then(
  (res) => res.json()
);
function Posts() {
  return (
    <div>
      <Suspense fallback={<h1>Loading Post.........</h1>}>
      <h1>100 post card here</h1>
        <Post response={fetchPost}></Post>
      </Suspense>
    </div>
  );
}

export default Posts;
