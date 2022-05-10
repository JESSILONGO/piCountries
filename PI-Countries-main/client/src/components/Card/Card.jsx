import React from "react";
import { Link } from "react-router-dom";
import styles from './card.module.css';

export default function Card({flags, name, region, id}){
    return(
        <div className={styles.container}>
            <img className={styles.imagen} src={flags} alt='img not found' width="230px" height="150px" />
            <h3 className={styles.button}><Link to={`/countries/${id}`}>{name}</Link></h3>
            <h4>{region}</h4>
            {/* <h5>{id}</h5> */}
         </div>
    )
};