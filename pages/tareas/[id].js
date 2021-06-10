import React from "react";
import Link from "next/link";

// This function gets called at build time
export async function getStaticPaths() {
  const data = await fetch("https://odarlis.netlify.app/api/data", {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const posts = await data.json();

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
  const data = await fetch("https://odarlis.netlify.app/api/data", {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const posts = await data.json();
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
