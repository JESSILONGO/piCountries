import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails, setStateDetail } from '../../actions/index';
import { Link, useParams } from 'react-router-dom';
import styles from './details.module.css';
import Loading from '../Loading/loading'




export default function Details (){
  const {id} = useParams();
  //console.log(id)
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const country = useSelector((state) => state.stateDetail);
  
 

 useEffect(() =>{ 
     dispatch(getDetails(id))
     return () => {dispatch(setStateDetail())}                                  //fijate return
 },[dispatch, id]);

 
 
// console.log(country, 'GET_DETAIL')

 return (
     <div>
         { loading === true? (<Loading setLoading={setLoading}/>) :
    <div className={styles.container}> 
         <div className={styles.containerB}>
            {/* {console.log(country)} */}
             <h1 className={styles.name}>Country:{country.length ? country[0].name : 'Loading...'} </h1> 
             {/* {console.log(country)} */}
             <h6>ID: {country.length? country[0].cca3 : 'Loading...'}</h6>
             <img src={country.length? country[0].flags : 'Loading...'} alt='' />
             <h2 className={styles.a}>Continent: {country.length?country[0].region : 'Loading...'}</h2>
             <h3 className={styles.a}>Capital: {country.length? country[0].capital : 'Loading...'}</h3>
             <h3 className={styles.a}>Subregion: {country.length? country[0].subregion : 'Loading...'}</h3>
             <h4 className={styles.a}>Area: {country.length? country[0].area : 'Loading...'}</h4>
             <h4 className={styles.a}>Population: {country.length? country[0].population : 'Loading...'}</h4>
             <h4 className={styles.a}>Activities: {country.length && country[0].activities.length ? country[0].activities.map( a => 'Name: ' + a.name + ', ' + 'difficulty: ' + a.difficulty + 
             ', ' + 'duration: ' + a.duration + ', ' + 'season: ' + a.season + '.') : 'No activities'}</h4>               
         </div>
         <div className={styles.button}>
         <Link to= '/home'>
             <button>BACK</button>
         </Link>
         </div>
         </div>
         } 
     </div>
    )
};

