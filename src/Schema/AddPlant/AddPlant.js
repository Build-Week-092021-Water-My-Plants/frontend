import React, { useState } from 'react'
import AddPlantForm from './AddPlantForm'


const initialValues = {
    nickname: '',
    species: '',
    h20frequency: '',
    // image: ''
}

const defaultPlantList = [];

export default function AddPlant() {
    const [formValues, setFormValues] = useState(initialValues);
    const [plantList, setPlantList] = useState(defaultPlantList);

    const updateValues = (formName, formValue) => {
        console.log(formName, formValue);
        setFormValues(formName, formValue);
    }

    const submitForm = () => {
        const newPlant = {
            nickname: '',
            species: '',
            h20frequency: '',
            // image: ''
        }
        setPlantList([ ...plantList, newPlant])
    }

    return (
        <div>
            <h1>This is Rendered from AddPlant.js</h1>
            <AddPlantForm 
                formValues={formValues} 
                updateValues={updateValues} 
                submitForm={submitForm} />
        </div>
    )
}
