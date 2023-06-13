import React from "react";
import { useParams } from "react-router-dom";
const Details = ({ cards }) => {
  const { id } = useParams();
  const movie = cards.find((e) => e.id == id);
  console.log(movie);
  return <div>{<h1>{movie.description}</h1>}</div>;
};

export default Details;
