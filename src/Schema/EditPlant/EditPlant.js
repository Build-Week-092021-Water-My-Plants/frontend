import React, { useState, useEffect } from "react";
import * as yup from "yup";
import formSchema from "../validation/formSchema";
import { Link } from "react-router-dom";
import EditPlantForm from "./EditPlantForm";
import styled from "styled-components";

const initialFormValues = {
    nickname: "",
    h2oInterval: 0,
    h2oAmount: "",
};

const initialFormErrors = {
    nickname: "",
    // species: "",
    h2oInterval: 0,
    h2oAmount: "",
    // image: "",
};

const plantList = [];
const initialDisabled = true;

export default function EditPlant() {
    const [plants, setPlants] = useState(plantList);
    const [formValues, setFormValues] = useState(initialFormValues);
    const [formErrors, setFormErrors] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

    const validate = (name, value) => {
        yup.reach(formSchema, name)
            .validate(value)
            .then((valid) => {setFormErrors({...formErrors, [name]: "",});
            })
            .catch((err) => {setFormErrors({...formErrors, [name]: err.errors[0]});
            });
        setFormValues({ ...formValues, [name]: value })
    };

    useEffect(() => {
        formSchema.isValid(formValues)
            .then((valid) => {setDisabled(!valid);});
    }, [formValues]);

    const inputChange = (name, value) => {
        validate(name, value);
        setFormValues({ ...formValues, [name]: value });
    };

    const submit = () => {
        const newPlant = {
            nickname: formValues.nickname.trim(),
            h2oInterval: formValues.h2oInterval,
            h2oAmount: formValues.h2oAmount.trim()
        }
        const editPlant = {
            nickname: formValues.nickname.trim(),
            h2oInterval: formValues.h2oInterval,
            h2oAmount: formValues.h2oAmount.trim(),
        }
        // putNewPlant(editPlant);
    }


    return (
       
        <div>
            <div>
            <StyledNav>
                <div className="navBar">
                <h1 className="title">WATER MY PLANTS</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <span className='navspans'></span>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                    <span className='navspans'></span>
                    <Link to="/login">Log-In</Link>
                </nav>
                </div>
            </StyledNav>
                <StyledEditPlants>
                <EditPlantForm
                    values={formValues}
                    change={inputChange}
                    submit={submit}
                    disabled={disabled}
                    errors={formErrors}
                    setValues={setFormValues}
                />
                </StyledEditPlants>
            </div>
        </div>
            
    )
}

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
    .navBar{
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

`

