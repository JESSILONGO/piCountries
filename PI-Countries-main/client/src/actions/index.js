import axios from 'axios';

export function getAll(){
    return async function(dispatch){
        const json = await axios.get('http://localhost:3001/countries')             //Back=>me trae todo
    return dispatch({
    type: 'GET_COUNTRIES',
    payload: json.data
    })
}};
export function getName(name){
    return async function(dispatch){
        try{
            const res = await axios.get('http://localhost:3001/countries?name=' + name)
            return dispatch({
            type: 'GET_NAME',
            payload: res.data
            })
        }
        catch(error){
             if(error.response){
                 alert(error.response.data)
        }
    }
}};

export function orderByName(payload){
        return ({
            type: 'ORDER_BY_NAME',
            payload
        })
};

export function getDetails(id){
        return async function (dispatch){
            try {
                const getDet = await axios.get('http://localhost:3001/countries/' + id)
                return dispatch({
                    type: 'GET_DETAIL',
                    payload: getDet.data
                })
            }
            catch(error){console.log(error)}
        }
};
    
export function filterContinent(payload){                                           //payload=>component
    //console.log(payload)
        return ({
            type: 'FILTER_CONTINENT',
            payload
        })
};

export function filterPopulation(payload){
        return({
            type:'FILTER_POPULATION',
            payload
        })
};

export function postActivity(payload){
    return async function(dispatch){
        const activity = axios.post('http://localhost:3001/activity', payload)
        // console.log(activity)
        return activity
    }
};
export function getActivities(){
    return async function(dispatch){
       const getAct = await axios.get('http://localhost:3001/activity')
        return dispatch({
            type: 'GET_ACTIVITIES',
            payload: getAct.data
        })
    }
};

export function filterAct(payload){
        return{
            type: 'FILTER_ACTIVITY',
            payload
        }
};

