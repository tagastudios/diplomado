import React from "react";
import Post from "./Post";
import { posts } from "../../data/data";

function Grid() {
  const sortedPosts = posts.sort((a, b) => b.id - a.id);
  const data = [...sortedPosts];

  for (let i = posts.length; i < 9; i++) {
    data.push(null);
  }
  return (
    <div className="grid">
      {
        //Sort By ID, last posts comes first
        data.map((post) => {
          return <Post post={post} key={Math.random()} />;
        })
      }
    </div>
  );
}

export default Grid;
