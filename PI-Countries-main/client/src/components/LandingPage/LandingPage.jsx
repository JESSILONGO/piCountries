import React from 'react';
import {Link} from 'react-router-dom';
import styles from './landing.module.css'
import Login from './loguin'
import Logout from './Logout'
import Profile from '../Profile/Profile'
import { useAuth0 } from '@auth0/auth0-react';


export default function LandingPage(){
    const {isAuthenticated} = useAuth0()
    return(
        <div className={styles.imgFondo}>
        <div className={styles.img}>
            <p>Discover the World</p> 
            {isAuthenticated ? <>
            <Profile />
            <Logout />
            </>
            : <Login /> }
            <Link to='/home'>
             <button> GO !</button>
             </Link>
        </div>
        </div>
    )
};