import React from "react";
import Link from "next/link";
import { posts } from "../../data/data";

// This function gets called at build time
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: {
      id: post.id.toString(),
    },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  //

  const id = context.params.id;
  const detail = posts.find((post) => post.id == id);

  return {
    props: {
      detail,
    },
  };
}

function PostDetail({ detail }) {
  return (
    <section className="tarea__section">
      <Link href="/">
        <div className="back">{"< "}Inicio</div>
      </Link>
      <div className="content">
        <h1>{detail.title}</h1>
        <img src={`/${detail.picture}`} alt={detail.title} />
      </div>
    </section>
  );
}

export default PostDetail;
