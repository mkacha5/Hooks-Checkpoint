import React, { useState } from "react";

const AddCard = ({getCards}) => {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [posterUrl, setposterUrl] = useState("")
    const [rating, setrating] = useState("")
    const [trailerSrc, settrailerSrc] = useState("")
    const handleClick = ( )=> {
        getCards(title,desc,posterUrl,rating,trailerSrc)
        setDesc('')
        setTitle('')
        setposterUrl('')
        setrating('')
        settrailerSrc('')
      }
    
  return (
    <>
      <button className="btn" onClick={handleClick}> add </button>
      <input value={title} type="text" placeholder="Add title" onChange={(e)=>{setTitle(e.target.value)}} />
      <input value={desc} type="text" placeholder="Add desc" onChange={(e)=>{setDesc(e.target.value)}} />
      <input value={posterUrl} type="text" placeholder="Add posterUrl" onChange={(e)=>{setposterUrl(e.target.value)}} />
      <input value={rating} type="text" placeholder="Add rating" onChange={(e)=>{setrating(e.target.value)}} />
      <input value={trailerSrc} type="text" placeholder="Add trailerSrc" onChange={(e)=>{settrailerSrc(e.target.value)}} />

    </>
  )
}

export default AddCard