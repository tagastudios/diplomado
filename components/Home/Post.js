import React from "react";
import Link from "next/link";

function Post({ post }) {
  if (post !== null) {
    return (
      <Link href={`/tareas/${post.id}`} key={post.id}>
        <div className="post">
          <img src={post.picture} alt={post.title} />
        </div>
      </Link>
    );
  } else {
    return <div className="post blank"></div>;
  }
}

export default Post;
