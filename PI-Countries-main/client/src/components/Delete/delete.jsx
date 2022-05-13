import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getActivities, getDeleteActivities} from '../../actions';
import { deleteAct } from '../../actions';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './delete.module.css'




export default function Delete (){
    const dispatch = useDispatch();
    const deteleActivities = useSelector((state) => state.stateDelete);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    (console.log(deteleActivities))

    useEffect(() =>{
        dispatch(getDeleteActivities())
        dispatch(getActivities())
    },[dispatch])

    function handleChange(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(e.target.value)
    }

    function handleDelete(name){
        if(name !== 'all'){
        dispatch(deleteAct(name))
        setName('')
        navigate('/home')
        return Swal.fire('Deleted activity!')
        }else{
            dispatch(getDeleteActivities())
        }
        }


    return(
        <div className={styles.container}>
            {console.log(deteleActivities)}
                         <div>
                             <select onChange={e => handleChange(e)}> 
                            <option value='all'>ACTIVITY</option>
                            {deteleActivities.length? deteleActivities.map( a => {
                        return (
                            <option value={a.name} key={a.id}>{a.name}</option>
                        )})
                     : 'Loading...'}
                      </select>
                     </div>
                     <button className={styles.button} onClick={() => handleDelete(name)}>DELETE</button>
                     <div>
                     <Link to= '/home'>
                         <button className={styles.back}>BACK</button>
                     </Link>
                     </div>
        </div>
    )
}