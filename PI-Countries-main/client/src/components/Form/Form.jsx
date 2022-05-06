import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { getActivities, getAll, postActivity } from '../../actions';

//Validaciones
function validate(input){
    let errors = {};
    if(!input.name){
        errors.name = 'Name required' 
    }else if(isNaN(input.name) !== true){
        errors.name = 'Name cannot be a number'
    }else if (!input.difficulty || isNaN(input.difficulty) !== false || input.difficulty < 1 || input.difficulty > 5){
        errors.difficulty = 'Requires a number from 1 to 5'
    }else if (!input.duration || isNaN(input.duration) !== false){
        errors.duration = 'Requires a number'
    }
    return errors;
 };
    

export default function Form(){
    const dispatch = useDispatch();
    const allCountries = useSelector((state) => state.stateCountries);
    const allActivities = useSelector((state) => state.stateActivities);
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    

    const [input, setInput] = useState({                                            //como declaro en back
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: [] 
    });

    function handleChange(e){
        setInput({
            ...input,
            [e.target.name]: e.target.value                                        //Name toma=>estado input
        })
        setErrors(validate({
            ...input,
            [e.target.name] : e.target.value
        }))
        // console.log(errors)
    };

    function handleCheck(e){
        if(e.target.checked){
            setInput({
                ...input,
                season: e.target.value
            }) 
        }
    };
    
    function handleSelect(e){
        e.preventDefault()
        if(!input.countries.includes(e.target.value) && e.target.value !== 'countries')
        setInput({
            ...input,
            countries:[...input.countries, e.target.value]                                                                 //Concateno el valor del input
        })
    };

    function handleDelete(e){
        setInput({
            ...input,
            countries: input.countries.filter(c => c !== e)
        })
    };

    function handleSubmit(e){
    e.preventDefault(e)
    setErrors(validate(input))
    const errorSave= validate(input)
    if(Object.values(errorSave).length !== 0){
        alert('Please, fullfil the required camps ')
    }else{
        dispatch(postActivity(input))
        alert('Congratulations! cool creation...')
    //Limpio input
    setInput({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        countries: []  
    })}
    navigate('/home')
    };
    

    useEffect(() =>{
        dispatch(getAll())
        dispatch(getActivities())
    }, []);

    return(
        <div>
            <Link to= '/home'> <button>Back</button></Link>
            <h1>Create Activity</h1>
            <form
             onSubmit={(e) => handleSubmit(e)}>
            <div>
                 <label>Name: </label>
                 <input 
                    placeholder='Ex(Surf...)'
                    type='text'
                    value={input.name}
                    name='name'
                    onChange={(e) => handleChange(e)}
                />
                    {errors.name && (
                        <p>{errors.name}</p>
                    )}
            </div>
            <div>
                <label>Difficulty: </label>
                <input 
                    placeholder='Ex(2...)'
                    type='number'
                    max={5}
                    min={1}
                    value={input.difficulty}
                    name='difficulty'
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.difficulty && (
                      <p>{errors.difficulty}</p>
                    )}
            </div>
            <div>
                <label>Duration: </label>
                <input
                    placeholder='Ex(30...)'
                    type='number'
                    min={0}
                    value={input.duration}
                    name='duration'
                    onChange={(e) => handleChange(e)}
                    />
                    {errors.duration && (
                        <p>{errors.duration}</p>
                    )}
            </div>
            <div>
                <label>Season: </label>
                <label><input  
                    type='radio'
                    value='Summer'
                    name= 'check'
                    onChange={(e) => handleCheck(e)}
                    />
                   Summer
                </label>
                <label><input  
                    type='radio'
                    value='Autumn'
                    name='check'
                    onChange={ (e) => handleCheck(e)}
                    />
                   Autumn
                </label>
                <label><input
                    type='radio'
                    value='Winter'
                    name='check'
                    onChange={ (e) => handleCheck(e)}
                    />
                   Winter
                </label>
                <label><input 
                    type='radio'
                    value='Spring'
                    name='check'
                    onChange={(e) => handleCheck(e)}
                    />
                   Spring
                </label>
            </div>
            <div>
                <select 
                    onChange={(e) => handleSelect(e)}>
                <option value='country'>Countries...</option>
                    {
                    allCountries.map(c =>
                        <option value={c.name}>{c.name}</option>
                    )} 
                </select>
            </div>
            <div>
                <p>
                 <button type='submit '>CREATE</button>
                </p>
            </div>
            </form>
                 {/* para ver que selecciono */}
                    { input.countries.map(e =>
                        <div>
                            <p>{e}</p>
                            <button onClick={() => handleDelete(e)}>X</button> 
                        </div>
                    )}
        </div>
    )
};

