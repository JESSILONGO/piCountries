const express = require ('express');
const ruteA = express.Router();
const {Country, Activity} = require ('../db')


ruteA.get('/', async (req, res) =>{         
    try{
        const dbAct = await Activity.findAll({                                       //Busco todos los nombres de las actividades
            attributes: ['name'],                                                     
            include: Country                                                        //Incluidos todos los datos del pais
        })
        //console.log(dbAct)
        res.status(200).send(dbAct)                                                    
    }
    catch(error){console.log(error)}
});


ruteA.post('/', async (req, res) =>{
    const {name, difficulty, duration, season, countries} = req.body;                   //Requiero datos del front
    const newActivity = {name, difficulty, duration, season};

    try {   
        const validateAct = await Activity.findOne({                                   //Busco si existe
            where:{
                name : name
            }
        })
        if(!validateAct){               
        const createActivity = await Activity.create(newActivity)                     //Creo                                                 //Busco el match con el country
        let matchCountry = await Country.findAll({
            where: {
                name: countries
            }
        })
        await createActivity.addCountry(matchCountry)                                  //Agrego
        res.status(200).send('Activity created')
        }else{                                                                      
            let matchCountry2 = await Country.findAll({
            where: {
                name: countries
            }
        })
        await validateAct.addCountry(matchCountry2)                                   //Si existe no se duplica
        res.status(200).send('Activity created')
        }
    }    
    catch(error){console.log(error)} 
});   



module.exports = ruteA;


