import React from 'react';


export default function Loading ({setLoading}){
 return(
     <div>
        <img src='https://i.pinimg.com/originals/c2/35/c7/c235c7dd9e7765960ffc41b3009d5368.gif' alt=''/>
             {
                 setTimeout(() =>{
                     setLoading(false)
                 }, 5000)
             }
     </div>
 )
}