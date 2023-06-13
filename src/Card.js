import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import Rating from "./component/Rating";
import { Link } from "react-router-dom";
const Cardr = ({ el }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-3" style={{ height: "500px", width: "350px" }}>
        <img
          className="card-img-center"
          src={el.posterUrl}
          alt="Card image cap"
          style={{ height: "150 px", textAlign: "center", width: "150px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{el.title}</h5>
          <Rating rating={el.rating} />
          <p className="card-text">{el.description}</p>
          <Link to={`/movies/${el.id}`}>view</Link>
        </div>
      </div>
    </div>
  );
};

export default Cardr;
