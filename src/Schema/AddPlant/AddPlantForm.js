import React from 'react'
import { useHistory } from "react-router-dom";
import styled from 'styled-components';

export default function AddPlantForm(props) {
    console.log('AddPlantForm.js ln:6');
    const { formValues, updateValues, submitForm, disabled, errors } = props;

    const history = useHistory();

    const onSubmit = (evt) => {
        evt.preventDefault();
        console.log('AddPlantForm.js ln:12 props', props);
        submitForm();
        history.push("/addsuccess");
    }

    const onChange = (evt) => {
        const { name, value } = evt.target;
        updateValues(name, value);
        // console.log('AddPlantForm.js ln:21 onChange', value);

    }


    return (
        <StyledAddPlantForm>
            <form onSubmit={onSubmit}>
            <h1>Plant Form</h1>
                <div className="inputs">
                    <label>
                        <input 
                            type="text"
                            name="nickname"
                            placeholder="Name"
                            value={formValues.nickname}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        <input 
                            type="text"
                            name="species"
                            placeholder="Species"
                            value={formValues.species}
                            onChange={onChange}
                        />
                    </label>
                    {/* <label>
                        <input
                            type="text"
                            name="h2oInterval"
                            placeholder="Daily, Weekly, Monthly etc."
                            value={formValues.h2oInterval}
                            onChange={onChange}
                        />
                    </label> */}

                    <label>
                        <input 
                            type="number"
                            name="h2oFrequency"
                            placeholder="Water Freq No."
                            value={formValues.h2oFrequency}
                            onChange={onChange}
                        />
                    </label>
                    {/* <label> Image &nbsp;
                        <input 
                            type="image"
                            src={formValues.image}
                            alt="a plant!"
                            width="48"
                            height="48"
                            onChange={onChange}
                        />
                    </label> */}
                    <div className="errors">
                        <div className="nicknameError">
                            {errors.nickname}
                        </div>
                        <div className="Error">
                            {errors.species}
                        </div>
                        <div className="h2oError">
                            {errors.h2oFrequency}
                        </div>
                    </div>
                    <button id="submitBtn" disabled={disabled}>
                        Add Plant
                    </button>
                </div>
            </form>
        </StyledAddPlantForm>
    )
}

const StyledAddPlantForm = styled.div`
    form {
        background-color: ${prop => prop.theme.primaryColor};
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border:1px solid ${prop => prop.theme.accentColor};
        border-radius:20px;
        width:400px;
        height:300px;
        margin:2% 0%;
        padding:2% 2%;
    }

    .inputs {
        display:flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding: 2%;
        margin: 1%;
    }

    input {
        width:auto;
        height:auto;
        padding: 5%;
        margin: 5%;
        margin-left: -5%;
        border: none;
        border-radius: 25px;
        text-align:center;
    }

    button {
        border-radius: 25px;
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        background: rgb(34, 193, 195);
        background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284b63 100%);
        border: 0px;
        cursor: pointer;
        transition: opacity 0.25s ease-out;
        margin-top:5%;
      }
      button:hover {
        opacity: 0.85;
      }
`