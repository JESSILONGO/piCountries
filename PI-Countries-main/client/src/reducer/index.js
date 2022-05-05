
const inicialState = {
    stateCountry: [],
    stateCountries: [],
    stateActivities: [],
    stateDetail: {},
    };

function reducer (state = inicialState, action){
    switch(action.type){
        case 'GET_COUNTRIES':                                               
            return{
                ...state,
                stateCountry: action.payload, 
                stateCountries: action.payload                                                        
            }
        case 'GET_NAME':
            return{
                ...state,
                stateCountry: action.payload                                                //Siempre trabajo con el que renderizo.
            }
           
        case 'FILTER_CONTINENT':
                const allContinent = state.stateCountries
                const filterContinent = action.payload === 'all' ? allContinent : allContinent.filter(c => c.region === action.payload) 
            return{
                ...state,
                stateCountry: filterContinent
            }
        case 'ORDER_BY_NAME':
                const filterOrder = action.payload === "ascendente" ?                                //Payload=>value del componente
                state.stateCountries.sort((a, b) => a.name.localeCompare(b.name))               //Compara=>retorna enteros
                :  state.stateCountries.sort((a, b) => b.name.localeCompare(a.name));
            return {
                ...state,
                stateCountry: filterOrder
            }
        case 'GET_DETAIL':
            return{
                ...state,
                stateDetail: action.payload
            }         
        case 'FILTER_POPULATION':
                const filterPopulation = action.payload === "Min" ?
                state.stateCountries.sort(function (a, b){
                    return a.population - b.population
                }) : 
                state.stateCountries.sort(function (a, b){
                    return b.population - a.population
                })
            return{
                ...state,
                stateCountry: filterPopulation
            }
        case 'GET_ACTIVITIES':
            return{
                ...state,
                stateActivities: action.payload
            }
        case 'POST_ACTIVITY':
            return{
                ...state,
            } 
        case 'FILTER_ACTIVITY':
                const allCountries = state.stateCountries
                const filterAct = action.payload === "all" ? allCountries.filter( c => c.activities.length > 0)
                : allCountries.filter(c => c.activities && c.activities.map(a => a.name).includes(action.payload))
            return{
                ...state,
                stateCountry: filterAct
            }                       
        default: 
            return{
                ...state
            }
    }
};

export default reducer;