const express = require ('express');
const ruteA = express.Router();
const {Country, Activity} = require ('../db')



ruteA.post('/', async (req, res) =>{
    const {name, difficulty, duration, season, countries} = req.body;
    try{
        const newActivity = await Activity.create({                                 //Busca o crea
            name: name,
            difficulty: difficulty,
            duration: duration,
            season: season
        })                                                                      //Busco el match con el country
        let actCountry = await Country.findAll({
            where: {
                name: countries
            }
        });
        await newActivity.addCountries(actCountry)                                   //Agrego
        res.status(200).send('Activity created')
    }
    catch(error){console.log(error)}
});

ruteA.get('/', async (req, res) =>{         
    try{
        const dbAct = await Activity.findAll({                                       //Busco todas las actividades en mi tabla.
            attributes: ['name'],                                                      //Incluido los countries que tengan esas actividades.
            include: Country
        })
        res.status(200).send(dbAct)                                                    //Todas las act y los paises que las contienen
    }
    catch(error){console.log(error)}
});


module.exports = ruteA;


