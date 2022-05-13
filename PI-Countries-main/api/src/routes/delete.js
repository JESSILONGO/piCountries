const express = require ('express');
const ruteB = express.Router();
const {Country, Activity} = require ('../db')


ruteB.get('/', async (req, res) =>{         
    let {name} = req.query
    try{
    if(!name){
        let allAct = await Activity.findAll({                                       //Busco todos los nombres de las actividades
            attributes: ['name'],
            include: Country                                                                                                            //Incluidos todos los datos del pais
        })
        //console.log(dbAct)
        res.status(200).send(allAct) 
    }else{
            let nameAct = await Activity.findAll({
                where:{
                    name : name
                },
                include: Country
            })
            if(nameAct){
            res.status(200).send(nameAct)
            }
            res.status(404).send('Activity not found')
        }                                                  
    }
    catch(error){console.log(error)}
});

ruteB.delete('/', async (req, res) => {
    let {name} = req.query
    try{
        await Activity.destroy({
            where: {
                name : name
            }
        })
        res.status(200).send('Deleted activity')
    }
    catch(error){res.send(error)}
});

module.exports = ruteB;
