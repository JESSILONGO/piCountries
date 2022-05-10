import React from "react";
import styles from './paginado.module.css'




export function Paginado({countryForPage, allCountries, paginado}){
    const pageNumber = [];
    for(let i = 1; i<=(allCountries/countryForPage); i++){              //Todos los paises / paises por pagina
        pageNumber.push(i)
    };
    return (
        <nav>
             <ul className={styles.container}>
                {
                    pageNumber?.map(number =>(
                         <button className={styles.button} key={number} onClick={() => paginado(number)}>{number}</button>     
                    ))
                }
             </ul>
        </nav>
    )
};