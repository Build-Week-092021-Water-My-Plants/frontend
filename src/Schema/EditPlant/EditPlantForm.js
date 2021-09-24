import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

export default function EditPlantForm(props) {
    // console.log('EditPlantForm.js ln:6 props', props);
    const { values, change, disabled, errors, setValues, submitForm } = props;
    // const { plantID } = useParams()
    const history = useHistory();
    
    const onSubmit = (event) => {
        event.preventDefault();
        submitForm();
        history.push('/EditPlantSuccess');
    }
    const onChange = (event) => {
        const { name, value } = event.target
        change(name, value)
    }
    return (
        <div>
            <StyledEditPlantForm>
                <form onSubmit={onSubmit}
                    className="add-plant contatiner"
                    id="add-plant-form">

                    <div className="form-group submit">
                        <h2>Edit Plant</h2>
                    </div>

                    <label>
                        Plant Name:
                        <input
                            name="nickname"
                            type="text"
                            value={values.nickname}
                            onChange={onChange}
                            placeholder="Plant to Edit?"
                            maxLength="30"
                            id="name-input"
                        />
                    </label>
                    <label>
                        Species
                        <input
                            type="text"
                            name="species"
                            placeholder="Species"
                            value={values.species}
                            onChange={onChange}
                        />
                    </label>
                    <label>
                        Times Per/mo.
                        <input
                            type="number"
                            name="h2oFrequency"
                            placeholder="How much water?"
                            value={values.h2oFrequency}
                            onChange={onChange}
                        />
                    </label>

                    <button id="order-button" disabled={disabled}>
                        Edit Plant
                    </button>

                    <div className="errors">
                        <div>{errors.nickname}</div>
                        {/* <div>{errors.species}</div> */}
                        <div>{errors.species}</div>
                        <div>{errors.h2oAmount}</div>
                    </div>
                    <div>
                    </div>
                </form>
            </StyledEditPlantForm>
        </div>
    )
}



const StyledEditPlantForm = styled.div`
    form {
        background: rgba( 255, 255, 255, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:10px;
        width:400px;
        margin:2% 0%;
        padding:2% 2%;
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
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        border: 0px;
        cursor: pointer;
        box-shadow: inset 0 0 0 0;
        transition: opacity 0.25s ease-out;
        margin-top:5%;
        border-radius: 10px;
        background-color: rgba( 110, 115, 47, 0.2 );
        border: 1px solid white;

      }

      button:hover {
        opacity: 0.85;
        background: rgba( 110, 115, 47, 0.2 );
        box-shadow: inset 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        transition: 0.3s;
        
      }
`