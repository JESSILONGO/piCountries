import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import {getAll, postActivity } from '../../actions';
import styles from './form.module.css'
import Swal from 'sweetalert2';

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
        Swal.fire({title:'Please, fullfil the required camps', icon:'info'})
    }else{
        dispatch(postActivity(input))
        Swal.fire({ title:'Congratulations! cool creation...', icon:'success'})
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
    }, []);

    return(
        <div id={styles.container}>
            <Link to= '/home'> <button className={styles.button}>BACK</button></Link>
            <form className={styles.form}
             onSubmit={(e) => handleSubmit(e)}>
            <div className={styles.containerName}>
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
            <div className={styles.containerDiff}>
                <label>Difficulty: </label>
                <input 
                    placeholder='1 to 5'
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
            <div className={styles.containerDur}>
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
            <div className={styles.containerSeas}>
                <label className={styles.label}>Season: </label>
                <label className={styles.label1}><input  
                    type='radio'
                    value='Summer'
                    name= 'check'
                    onChange={(e) => handleCheck(e)}
                    />
                   summer
                </label>
                <label className={styles.label1}><input  
                    type='radio'
                    value='Autumn'
                    name='check'
                    onChange={ (e) => handleCheck(e)}
                    />
                   autumn
                </label>
                <label className={styles.label1}><input
                    type='radio'
                    value='Winter'
                    name='check'
                    onChange={ (e) => handleCheck(e)}
                    />
                   winter
                </label>
                <label className={styles.label1}><input 
                    type='radio'
                    value='Spring'
                    name='check'
                    onChange={(e) => handleCheck(e)}
                    />
                   spring
                </label>
            </div>
            <div className={styles.containerC}>
                <select 
                    onChange={(e) => handleSelect(e)}>
                <option value='country'>Countries...</option>
                    {
                    allCountries.map(c =>
                        <option value={c.name}>{c.name}</option>
                    )} 
                </select>
            </div>
            <div className={styles.containerB}>
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

