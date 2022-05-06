import React from "react";




export function Paginado({countryForPage, allCountries, paginado}){
    const pageNumber = [];
    for(let i = 1; i<=(allCountries/countryForPage); i++){              //Todos los paises / paises por pagina
        pageNumber.push(i)
    };
    return (
        <nav>
             <ul>
                {
                    pageNumber?.map(number =>(
                         <button  key={number} onClick={() => paginado(number)}>{number}</button>     
                    ))
                }
             </ul>
        </nav>
    )
};