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
    species: "",
    h2oInterval: "",
    image: "",
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
            <StyledHeader>
                <h1>WATER MY PLANTS</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <span className='navspans'></span>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                    <span className='navspans'></span>
                    <Link to="/login">Log-In</Link>
                </nav>
            </StyledHeader>
                <EditPlantForm
                    values={formValues}
                    change={inputChange}
                    submit={submit}
                    disabled={disabled}
                    errors={formErrors}
                    setValues={setFormValues}
                />
            </div>
        </div>
    )

}
const StyledHeader = styled.header`
  color: ${({ theme }) => theme.secondaryColor};
`;

