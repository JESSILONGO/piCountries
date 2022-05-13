import React from 'react';
import {useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActivities, getAll} from '../../actions/index';
import {Link} from 'react-router-dom';
import Card from '../Card/Card';
import { Continents} from '../Continents/Continents';
import { Paginado } from '../Paginado/Paginado';
import { filterContinent } from '../../actions/index';
import Order from '../Order/Order';
import SearchBar from '../Search/SearchBar';
import Population from '../Order/Population';
import Activities from '../Activities/Activities';
import styles from './home.module.css';
import Loading from '../Loading/loading';




export default function Home(){

    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.stateCountry);                      //Me trae todo
    const [currentPage, setCurrentPage] = useState(1);                                   //Pag 1
    const [countryForPage] = useState(10);                                              //10 por Pag.
    const indexLastCountry = currentPage * countryForPage;                              //1 * 10 = 10
    const indexFirsCountry = indexLastCountry - countryForPage;                         //10 - 10 = 0
    const currentCountries = allCountries.slice(indexFirsCountry, indexLastCountry);    //Divido el array entre 0 y 10
    const [order, setOrder] = useState('');
    const [loading, setLoading] = useState(true);
    
    
    const paginado = (pageNumber) =>{
        setCurrentPage(pageNumber)
    };
                                                           
                                                                                             
    useEffect(() =>{
        dispatch(getAll())                                                             //Despacho=>function=>todos los paises.
        dispatch(filterContinent())                                                                                                           
        dispatch(getActivities())
    },[dispatch]);


     return (
        <div id={styles.img}>
            <div className={styles.paginado}>
                <Paginado 
                   countryForPage={countryForPage}
                   allCountries={allCountries.length}
                   paginado={paginado}
                 />
            </div>
            <div className={styles.containerBut}>
                <button className={styles.button}><Link to='/activity'>CREATE</Link></button>
                <button className={styles.button}><Link to= '/delete'>DELETE</Link></button>
                </div>
                {
                    allCountries.length === 0? <p id={styles.imagenL}>(<Loading setLoading={setLoading}/>)</p>
                     : currentCountries.map(c =>{
                        return (
                            <div> 
                             <Card id={c.cca3} flags={c.flags} name={c.name} region={c.region} />
                            </div>   
                        ) 
                     })
                }
            <div>
                <p>
                <Continents 
                setCurrentPage={setCurrentPage}/>
                </p>
            </div>
            <div>
                <p>
                <Order
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage} />
                </p>
                <p>
                <Population
                    setOrder={setOrder}
                    setCurrentPage={setCurrentPage} />
                </p>
            </div>
            <div>
                <p>
                <Activities />
                </p>
            </div>
            <div>
                <p>
                <SearchBar />
                </p>
               <div className={styles.p}>
                   <p>All countries which are Members of the United Nations
                       may become members of WHO by accepting its Constitution.
                       Other countries may be admitted as members when their application
                       has been approved by a simple majority vote of the World Health Assembly.
                       Territories which are not responsible for the conduct of their behalf
                       by the Member or other authority responsible for their international
                       relations. Member of WHO are grouped according to regional distribution
                       (194 Member States).
                   </p>
               </div>
            </div>
        </div>
     )
};