const express = require ('express');
const rute = express.Router();
const {getAll} = require ('../controllers/Countries');

rute.get('/', async (req, res) =>{                                                                            
    let {name} = req.query;                                                     
    if(!name){                                                                  //Si no recibo name por query.
        let countries = await getAll();                                        //Me traigo todo.
        res.status(200).send(countries);
    }else{
        try{
            let country = await getAll();                                     //Si recibo=>traigo todo y filtro
            let nameCountry = country.filter(c => c.name.toLowerCase().startsWith(name.toLowerCase()));        //startsWith=>compara caracteres de cadenas.
            nameCountry.length ?
            res.status(200).send(nameCountry)                                                            
            : res.status(404).send('Country not found');                                                        
        }
        catch(error){
         res.send(error)
        }; 
    };
});



rute.get('/:id', async (req, res) =>{                                             
    let {id} = req.params                                                               //Id por params
    try{
        let allId = await getAll();                                                    //Trigo todo y filtro
        let countryId = allId.filter( c => c.cca3.toUpperCase().startsWith(id.toUpperCase()))
        countryId ?
        res.status(200).send(countryId)
        : res.status(404).send('Country not found')
    }
    catch(error){res.send(error)}
});


module.exports = rute;