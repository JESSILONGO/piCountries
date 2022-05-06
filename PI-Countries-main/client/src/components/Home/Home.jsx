import React from 'react';
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getAll} from '../../actions/index';
import {Link} from 'react-router-dom';
import Card from '../Card/Card';
import { Continents} from '../Continents/Continents';
import { Paginado } from '../Paginado/Paginado';
import { filterContinent } from '../../actions/index';
import Order from '../Order/Order';
import SearchBar from '../Search/SearchBar';
import Population from '../Order/Population';
import Activities from '../Activities/Activities';




export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.stateCountry);                      //Me trae todo
    const [currentPage, setCurrentPage] = useState(1);                                   //Pag 0
    const [countryForPage] = useState(10);                                              //10 por Pag.
    const indexLastCountry = currentPage * countryForPage;                              //1 * 10 = 10
    const indexFirsCountry = indexLastCountry - countryForPage;                         //10 - 10 = 0
    const currentCountries = allCountries.slice(indexFirsCountry, indexLastCountry);    //Divido el array entre 0 y 10
    const [order, setOrder] = useState('');
    
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    };
                                                           
                                                                                             
    useEffect(() =>{
        dispatch(getAll())                                                             //Despacho=>function=>todos los paises.
        dispatch(filterContinent())                                                  //Despacho=>function=>filtrado por continente.                                                         
    },[dispatch]);


     return (
        <div>
            <h1>Countries of the World</h1>
            <div>
                <Paginado 
                   countryForPage={countryForPage}
                   allCountries={allCountries.length}
                   paginado={paginado}
                 />
            <div>
                <p>
                <Continents />
                </p>
            </div>
            <div>
                <p>
                <Activities />
                </p>
            </div>
            <div>
                <p>
                <Order
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage} />
                </p>
            </div>
            <div>
                <p>
                <Population
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage} />
                </p>
            </div>
            <div>
                <p>
                <SearchBar />
                </p>
                <h4><Link to='/activity'>CREATE ACTIVITY!</Link></h4>
            </div>
                 {
                     currentCountries.map(c =>{
                        return (
                            <div> 
                             <Card id={c.cca3} flags={c.flags} name={c.name} region={c.region} />
                            </div>   
                        ) 
                     })
                 }
            </div>
        </div>
     )
};