import React from "react";
import { useDispatch} from "react-redux";
import {getAll, orderByName} from '../../actions/index';
import styles from './order.module.css'



export default function Order({setOrder, setCurrentPage}){                                          
 const dispatch = useDispatch();
 
 function handleOrdChange(e) {
    e.preventDefault()
    if(e.target.value !== "all"){
        dispatch(orderByName(e.target.value))
        setCurrentPage(1)                                                                   
        setOrder(e.target.value)
    }else{
        dispatch(getAll())
        setCurrentPage(1)                                                                   
        setOrder(e.target.value)
    }                                                              //Setea=>estado vacio=>ordenado dependiento del value
};
    return(
            <div> 
                <div className={styles.order}>
                <select onChange={e => handleOrdChange(e)}>
                    <option  value='all' key='all'> Alphabetically</option>
                    <option value='ascendente' key= 'ascendente'> A - Z </option>
                    <option value='descendente'key='descendente'> Z - A </option>
                </select>
                </div> 
            </div>
)};