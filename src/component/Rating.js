import React from 'react'

const Rating = ({rating,setRating}) => {
    const starts = start => {
        const startArray=[];
        for (let i=1 ; i<=5; i++){
            if (i<=start) {
                startArray.push(<span className="fs-4" onClick={() => setRating(i)}> &#9733; </span>)
            }
            else {
                startArray.push(<span className="fs-4" onClick={() => setRating(i)}> &#9734; </span>)
            }
        }
        return startArray
    }
  return (
    <div> {starts(rating) }</div>
  )
}
Rating.defaultProps={
    setRating:() =>{},
};

export default Rating