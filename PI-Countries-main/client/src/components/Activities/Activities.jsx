import React, { useEffect } from 'react';
import {getActivities, getAll} from '../../actions/index';
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import { filterAct } from '../../actions/index';




export default function Activities (){
    const dispatch = useDispatch();
    const allAct = useSelector((state) => state.stateActivities);

    useEffect(() =>{
        dispatch(getActivities())
    },[dispatch]);

    function handleChangeAct(e){
        e.preventDefault()
         if(e.target.value !== 'all'){
          dispatch(filterAct(e.target.value))
        }else{
          dispatch(getAll())
        }                                                                 
    };



    return (
        <div>
            {/* {console.log(allAct)} */}
            <select onChange={(e) => handleChangeAct(e)}>
                <option value= 'all'>Search by activities...</option>
                {
                    allAct.map(a => { 
                        return(
                            <option value={a.name} key={a.name}>{a.name}</option>
                        )
                    }) 
                }
                
            </select>
        </div>
    )
};