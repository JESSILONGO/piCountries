const axios = require ('axios');
const {Country, Activity} = require ('../db');



const countries = async () => {                                                       //Asincrono.
 try{
     const api = await axios.get('https://restcountries.com/v3/all');                //Llamada a la api.
     const apiCountries = await api.data.map( (e) =>{           
        Country.findOrCreate({                                                       //Busca o crea en Base de datos.   
                    where: {
                    name: e.name['common'],
                    cca3: e.cca3,
                    flags: e.flags[1],
                    region: e.continents[0],
                    capital: e.capital?e.capital[0]:'Capital not found',
                    subregion: e.subregion?e.subregion:'Subregion not found',
                    area: e.area,
                    population: e.population
                    }})});
                    //console.log(apiCountries)
    }
    catch(error){console.log(error)}
};
    

const db = async () =>{
    return await Country.findAll({                                                  //Todos los registros de la Base de datos.
        include: {
            model: Activity,                                                      //Incluyo el modelo Activities.
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
            attributes: []
            }
        }
    });
};


const getAll = async () =>{
    await countries();                                                              //Espera y ejecuta.
    const dbInfo = await db();                                                      
    return dbInfo;                                                                 //Ya tengo todo en Base de datos, lo retorno.
};


module.exports ={
    countries,
    db,
    getAll,
};                                                                              


