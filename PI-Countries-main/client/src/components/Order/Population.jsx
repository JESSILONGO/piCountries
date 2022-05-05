import React from "react";
import { useDispatch} from "react-redux";
import { filterPopulation, getAll } from "../../actions/index";



export default function Population ({setOrder, setCurrentPage}){
const dispatch = useDispatch();


function handlePopuChange(e) {
    e.preventDefault()
    if(e.target.value !== "all"){
        dispatch(filterPopulation(e.target.value))
        setCurrentPage(1)                                                                  
        setOrder(e.target.value) 
    }else{
        dispatch(getAll())}
        setCurrentPage(1)                                                                  
        setOrder(e.target.value)
};                                                            //Setea=>estado vacio=>ordenado


    return(
            <div>Countries with lager and smaller populations:
                <div> 
                <select onChange={e => handlePopuChange(e)}>
                    <option value='all' key='all'>No order</option>
                    <option value='Min' key= 'max'> Min - Max</option>
                    <option value='Max'key='min'>Max - Min</option>
                </select>
                </div>
            </div>
        )
};