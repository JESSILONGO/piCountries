import React from 'react';
import {Link} from 'react-router-dom';
import styles from './landing.module.css'


export default function LandingPage(){
    return(
        <div className={styles.imgFondo}>
        <div className={styles.img}>
            <p>Discover the World</p>
            <Link to='/home'>
             <button> GO !</button>
             </Link>
        </div>
        </div>
    )
};