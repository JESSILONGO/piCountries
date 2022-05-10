import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../actions/index';
import { Link, useParams } from 'react-router-dom';
import styles from './details.module.css';
import Loading from '../Loading/loading'




export default function Details (){
  let {id} = useParams();
  //console.log(id)
  const dispatch = useDispatch();
  const country = useSelector((state) => state.stateDetail);
  const [loading, setLoading] = useState(true);
 

 useEffect(() =>{
     dispatch(getDetails(id))
 },[dispatch, id]);

 
 
//  console.log(country, 'GET_DETAIL')

 return (
     <div> { loading === true? (<Loading setLoading={setLoading}/>) : 
     <div className={styles.container}>
         <div className={styles.containerB}>
            {/* {console.log(country)} */}
             <h1 className={styles.name}>Country:{country[0].name} </h1> 
             <h6>ID: {country[0].cca3}</h6>
             <img src={country[0].flags} alt='' />
             <h2 className={styles.a}>Continent: {country[0].region}</h2>
             <h3 className={styles.a}>Capital: {country[0].capital}</h3>
             <h3 className={styles.a}>Subregion: {country[0].subregion}</h3>
             <h4 className={styles.a}>Area: {country[0].area}</h4>
             <h4 className={styles.a}>Population: {country[0].population}</h4>
             <h4 className={styles.a}>Activities: {country.length && country[0].activities.length ? country[0].activities.map( a => 'Name: ' + a.name + ', ' + 'difficulty: ' + a.difficulty + 
             ', ' + 'duration: ' + a.duration + ', ' + 'season: ' + a.season + '.') : 'No activities'}</h4>               
            <div className={styles.button}>
         <Link to= '/home'>
             <button>BACK</button>
         </Link>
         </div>
         </div>
     </div>
        }
     </div>
    )
};

