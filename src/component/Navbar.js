import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './navbar.css'
import {nav,button,form} from 'react-bootstrap';
import Rating from './Rating';
function Navbar(props) {
    const [search, setSearch] = useState("");
const handleechange = e =>{
    setSearch(e.target.value);
    props.funsun(e.target.value)
}
    

    return (


        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#"> MOVIES APP </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse gri" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Watch List </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Watched</a>
                    </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" value={search} type="search" placeholder="Search" aria-label="Search" onChange={handleechange} />
                    <input type='button' value="Search" className="btn btn-outline-success my-2 my-sm-0"  />
                </form>
            </div>
         <Rating rating={props.rating} setRating={props.setRating} />
        </nav>


    );
}

export default Navbar