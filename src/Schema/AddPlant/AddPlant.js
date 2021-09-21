import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import AddPlantForm from './AddPlantForm'
import schema from '../validation/formSchema';
import * as yup from 'yup';
import styled from 'styled-components';

const initialValues = {
    nickname: '',
    species: '',
    h2oFrequency: ''
    // image: ''
}

const initialErrors = {
    nickname: '',
    species: '',
    h2oFrequency: ''
}

const initialPlantList = [];

export default function AddPlant() {
    const [formValues, setFormValues] = useState(initialValues);
    const [plantList, setPlantList] = useState(initialPlantList);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(true);

    const updateValues = (formName, formValue) => {
        console.log(formName, formValue);
        validate(formName, formValue);
        setFormValues({ ...formValues, [formName]: formValue});
    }

    const submitForm = () => {
        const newPlant = {
            nickname: '',
            species: '',
            h2oFrequency: '',
            // image: ''
        }
        setPlantList([ ...plantList, newPlant])

    }

    const validate = (name, value) => {
        yup.reach(schema, name)
        .validate(value)
        .then(() => setErrors({ ...errors, [name]: '' }))
        .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
      }

      useEffect(() => {
        schema.isValid(formValues)
        .then(valid => setDisabled(!valid))
      }, [formValues])


    return (
        <StyledAddPlants>
            <h1>Add Plant</h1>
            <nav>
                <Link to="/meet-our-team">Meet Our Team</Link>
                <span className='navspans'></span>
                <Link to="/">Home</Link>
                <span className='navspans'></span>
                <Link to="/login">Log-In</Link>
                <span className='navspans'></span>
            </nav>
            
            <AddPlantForm 
                formValues={formValues} 
                updateValues={updateValues} 
                submitForm={submitForm} 
                disabled={disabled}
                errors={errors}
                />
        </StyledAddPlants>
    )
}

const StyledAddPlants = styled.div`
    background-color: crimson;


`