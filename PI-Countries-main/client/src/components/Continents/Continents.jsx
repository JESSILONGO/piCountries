import React from 'react';
import { useSelector } from 'react-redux';
import {filterContinent} from '../../actions/index';
import { useDispatch } from 'react-redux';


export function Continents (){
    const dispatch = useDispatch();
    let allCountries = useSelector((state) => state.stateCountries);
    let allContinents = allCountries.map(c => c.region);
    let allContinent = new Set(allContinents);                                          //Elimino duplicados
    let continent =[];
    continent = [...allContinent]                                                       //Guardo copia en array
    //console.log(continent)
     
    function handleChange(e){
         e.preventDefault()
        dispatch(filterContinent(e.target.value))                                      //Action=>payload => el value de las options
     };
        return (
            <nav>
                <select onChange={e => handleChange(e)}>
                       <option value='all'>Search by continent... </option>
                        { 
                           continent.map(c=>
                        <option key={c.toString()} value={c}>{c}</option>)
                        }
                    </select>
            </nav>
        )
};