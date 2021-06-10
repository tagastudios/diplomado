import React from "react";
import Post from "./Post";

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

export const posts = [
  {
    id: 1,
    clase: 1,
    type: "A",
    title: "Tarea 1 - IKIGAI",
    picture: "img/tareas/1/ikai.png",
  },
  {
    id: 2,
    clase: 1,
    type: "B",
    title: "Tarea 2 - INTERACCIONES",
    picture: "img/tareas/1/interacciones.png",
  },
  {
    id: 3,
    clase: 1,
    type: "C",
    title: "Tarea 1 - OPTIMIZAR REDES",
    picture: "img/tareas/1/optimizando.png",
  },
];

export default Grid;
