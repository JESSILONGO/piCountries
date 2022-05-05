import { useState } from 'react';
import { getAll, getName } from '../../actions/index';
import { useDispatch } from 'react-redux';

function validate(name){
    let errors = {};
    if(!name || isNaN(name) !== true){
     errors.name = 'Requires a country'
    }
    return errors;
};



export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState({});
   
    
    
    function handleInput(e){
        e.preventDefault()
        setName(e.target.value)                                                        //Seteo en name al input                                           
    };

    const handleSubmit = (e) =>{
    e.preventDefault()
    setErrors(validate(name))
    const errorSave= validate(name)
    if(Object.values(errorSave).length !== 0){
        alert('Please, required a Country ')
    }else{
        dispatch(getName(name))} 
        setName('')                                                                         //Estado local=>accion
};

    function handleClick(e){ 
    dispatch(getAll())
    setName('')
    };                                                        

    return (
        <div>
            <input
                value={name}
                required autoComplete='off'
                type='text'
                placeholder='Name: (ex: Argentina...)'
                onChange={(e) => handleInput(e)}/>
             <button type='submit'onClick={(e) => handleSubmit(e)}>
                 SEARCH COUNTRY</button>
            <div>
                <p>
                 <button onClick={e => handleClick(e)}>                             
                  RECHARGE COUNTRIES
                 </button>
                </p>
            </div>
        </div>
    )
};