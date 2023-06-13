import React from "react";
import Cardr from "../Card";

// eslint-disable-next-line no-unused-vars
//const filterSearch=(cardname,valu)=> {return cardname.toLowerCase().includes(valu.toLowerCase())}
const Cardlist = ({ movies, valsearch, rating }) => {
  const t1 = movies.filter(
    (el) =>
      el.title.toLowerCase().includes(valsearch.toLowerCase()) &&
      el.rating >= rating
  );

  return t1.map((el) => <Cardr el={el} />);
};

export default Cardlist;
