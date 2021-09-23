import React, { useState, useEffect } from 'react'
import * as yup from 'yup';
import schema from '../validation/formSchema';
import AddPlantForm from './AddPlantForm'
import axiosWithAuth from '../../helpers/axiosWithAuth';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { add } from '../../actions/index'

const initialValues = {
    nickname: '',
    species: '',
    h2oAmount: '',
    // h2oInterval: "",
    // image: ''
}

const initialErrors = {
    nickname: '',
    h2oFrequency: '',
    species: '',
    // h2oInterval: "",
}

const initialPlantList = [];
const initialDisabled = true;

const AddPlant = (props) => {
    console.log('AddPlant.js ln:30 props', props);
    const [plantList, setPlantList] = useState(initialPlantList);
    const [formValues, setFormValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const postNewPlant = (newPlant) => {
        console.log('AddPlant.js ln:34', newPlant)
        axiosWithAuth()
            .post("plants", newPlant)
            .then((res) => {
                console.log('AddPlant.js ln:45 res', res);
                setPlantList([...plantList, res.data]);
                setFormValues(initialPlantList);
                props.add(res.data.user_id);
            })
            .catch((err) => {
                debugger;
                console.log(err);
            })
    };

    const validate = (name, value) => {
        yup
            .reach(schema, name)
            .validate(value)
            .then((valid) => {
                //eslint-disable-line
                setErrors({
                    ...errors,
                    [name]: "",
                });
            })
            .catch((err) => {
                setErrors({
                    ...errors,
                    [name]: err.errors[0],
                });
            });
        setFormValues({ ...formValues, [name]: value })
    };

    useEffect(() => {
        schema.isValid(formValues)
        .then((valid) => {
            setDisabled(!valid);
        });
    }, [formValues]);

    // const updateValues = (formName, formValue) => {
    //     console.log(formName, formValue);
    //     validate(formName, formValue);
    //     setFormValues({ ...formValues, [formName]: formValue });
    // }
    const updateValues = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value });
    };
const user_id = localStorage.getItem("user_id")
const species = formValues.species
const nickname = formValues.nickname
const h2oFrequency = formValues.h2oFrequency

    const submitForm = () => {
        const newPlant = {
            species,
            h2oFrequency,
            user_id,
            nickname
            
        }
        postNewPlant(newPlant);

    }

    return (
        <StyledAddPlants>
            <header>
                    <h1>Add Plant</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Log-In</Link>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                </nav>
            </header>

            <AddPlantForm
                // key={}
                formValues={formValues}
                updateValues={updateValues}
                submitForm={submitForm}
                disabled={disabled}
                errors={errors}
            />
        </StyledAddPlants>
    )
}
export default connect (null, {add})(AddPlant);

const StyledAddPlants = styled.div`
    background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
    background-size: cover;
    background-color: ${prop => prop.theme.secondaryColor};
    box-sizing:border-box;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0%;

//MEDIA QUERY SECTION
    @media (max-width: 800px) {
    font-size: 1rem;
      h1 {
          color:${({ theme }) => theme.accentColor};
          font-size:1.5rem;
      }
      header {
          height:4%;
          justify-content:space-evenly;
      }
      nav {
          width: 100%;
      }
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
      h1 {
          color:yellow;
          font-size:1.9rem;
      }
      header {
          height:auto;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
      }
      nav {
          width: 50%;
      }
  }
//HEADER SECTION
    header {
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:6%;
    }
    nav {
        width:30%;
        white-space:nowrap;
    }
    nav a {
        border:1px solid ${prop => prop.theme.accentColor};
        padding:1%;
        margin:0.2%;
        color: black;
        text-decoration:none;
    }
    nav a:hover {
        border:1px solid black;
        color: white;
    }

`;