import React from "react";




export function Paginado({countryForPage, allCountries, paginado}){
    const pageNumber = [];
    for(let i = 1; i<=Math.ceil(allCountries/countryForPage); i++){              //math.ceil(todos los paises / paises por pagina)me devuelve el entero
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