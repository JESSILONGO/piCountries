import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from './profile.module.css'

export default function Profile(){
    const {user, isAuthenticated, isLoading} = useAuth0()

    if(isLoading){
        return <div>Loading...</div>
    }

    return (
        isAuthenticated && (
            <div className={styles.containerProf}>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
            </div>
        )
    )
}