import React, { useState, useEffect } from "react";
import * as yup from "yup";
import formSchema from "../validation/formSchema";
import { Link } from "react-router-dom";
import EditPlantForm from "./EditPlantForm";
import styled from "styled-components";
import axiosWithAuth from '../../helpers/axiosWithAuth';
import { connect } from 'react-redux';
import { edit } from '../../actions/index'

const initialFormValues = {
    nickname: "",
    species: "",
    h2oFrequency: '',
};

const initialFormErrors = {
    nickname: '',
    h2oFrequency: '',
    species: '',
};

const plantList = [];
const initialDisabled = true;

const EditPlant = (props) => {
    // console.log('EditPlant.js ln:29 props', props);
    const [plants, setPlants] = useState(plantList);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const putNewPlant = (editedPlant) => {
        console.log('EditPlant.js ln:36 editedPlant', editedPlant);
        axiosWithAuth()
            .post("plants", editedPlant)
            .then((res) => {
                console.log('AddPlant.js ln:45 res', res);
                setPlants([...plants, res.data]);
                setFormValues(plantList);
                props.add(res.data.user_id);
            })
            .catch((err) => {
                debugger;
                console.log(err);
            })

    };

    const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then((valid) => {
                setFormErrors({ ...formErrors, [name]: "", });
            })
            .catch((err) => {
                setFormErrors({ ...formErrors, [name]: err.errors[0] });
            });
        setFormValues({ ...formValues, [name]: value })
    };

    useEffect(() => {
        formSchema.isValid(formValues)
            .then((valid) => { setDisabled(!valid); });
    }, [formValues]);

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value });
    };

    const user_id = localStorage.getItem("user_id")
    const species = formValues.species
    const nickname = formValues.nickname
    const h2oFrequency = formValues.h2oFrequency

    const submitForm = () => {
        const editedPlant = {
            species,
            h2oFrequency,
            user_id,
            nickname
        }
        putNewPlant(editedPlant);
    }

    return (
        <div>
            <div>
                <StyledNav>
                    <div className="navBar">
                        <h1 className="title">EDIT MY PLANT</h1>
                        <nav>
                            <Link to="/">Home</Link>
                            <span className='navspans'></span>
                            <Link to="/plantList"> My Plants </Link>
                            <span className='navspans'></span>
                            <Link to="/meet-our-team">Meet Our Team</Link>
                            <span className='navspans'></span>
                            <Link to="/logout">Log-out</Link>
                        </nav>
                    </div>
                </StyledNav>
                <StyledEditPlants>
                    <EditPlantForm
                        values={formValues}
                        change={inputChange}
                        submitForm={submitForm}
                        disabled={disabled}
                        errors={formErrors}
                        setValues={setFormValues}
                    />
                </StyledEditPlants>
            </div>
        </div>

    )
}
export default connect(null, { edit })(EditPlant);
const StyledEditPlants = styled.div`
    box-sizing: border-box;
    background: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
    background-size: cover;
    width:auto;
    height: 90vh;
    display: flex;
    justify-content: center;
    padding-top: 5%;
`

const StyledNav = styled.div`
    .navBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
    }
    .navBar .title {
        color: white;
    }
    nav {
        width:30%;
        display: flex;
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

`

