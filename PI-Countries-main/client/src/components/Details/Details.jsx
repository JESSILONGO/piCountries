import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetails } from '../../actions/index';
import { Link, useParams } from 'react-router-dom';



export default function Details (){
  let {id} = useParams();
  //console.log(id)
  const dispatch = useDispatch();
  const allAct = useSelector((state) => state.stateActivities);


 useEffect(() =>{
     dispatch(getDetails(id))
 },[dispatch, id]);

 const country = useSelector((state) => state.stateDetail)
 
 //console.log(country, 'GET_DETAIL')

 return (
     <div>
            {/* {console.log(country)} */}
             <h1>Country: {country.length? country[0].name : 'Loading...'} </h1> 
             <h6>ID: {country.length? country[0].cca3 : 'Loading...'}</h6>
             <img src={country.length? country[0].flags : 'Loading...'} alt='img not found' />
             <h2>Continent: {country.length? country[0].region : 'Loading...'}</h2>
             <h3>Capital: {country.length? country[0].capital : 'Loading...'}</h3>
             <h3>Subregion: {country.length? country[0].subregion : 'Loading...'}</h3>
             <h4>Area: {country.length? country[0].area : 'Loading...'}</h4>
             <h4>Population: {country.length? country[0].population : 'Loading...'}</h4>
             <h4>Activities: {country.length && country[0].activities.length ? country[0].activities.map( a => 'Name: ' + a.name + ', ' + 'difficulty: ' + a.difficulty + 
             ', ' + 'duration: ' + a.duration + ', ' + 'season: ' + a.season + '.') : 'No activities'}</h4>               
            <div>
         <Link to= '/home'>
             <button>BACK</button>
         </Link>
         </div>
     </div>
 )
};

