import React from "react";
import { Link } from "react-router-dom";

export default function Card({flags, name, region, id}){
    return(
        <div>
            <img src={flags} alt='img not found' width="250px" height="180px" />
            <h3>{name}</h3>
            <h4>{region}</h4>
            {/* <h5>{id}</h5> */}
            <div>
            <Link to={ `/countries/${id}`}>Information about {name}</Link>
            </div>
         </div>
    )
};