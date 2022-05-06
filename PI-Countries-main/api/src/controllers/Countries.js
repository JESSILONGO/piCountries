const axios = require ('axios');
const {Country, Activity} = require ('../db');



const countries = async () => {                                                       //Asincrono.
 try{
     const api = await axios.get('https://restcountries.com/v3/all');                //Solicitud API.
     const apiCountries = await api.data.map( (e) =>{           
        Country.findOrCreate({                                                       //Busca o crea=>Base de datos.   
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
    

const getAll = async () =>{
    await countries()
    return await Country.findAll({                                                  
        include: {
            model: Activity,                                                      //Incluyo Activity
            attributes: ['name', 'difficulty', 'duration', 'season'],
            through: {
            attributes: []
            }
        }
    });
};



module.exports ={
    countries,
    getAll,
};                                                                              


