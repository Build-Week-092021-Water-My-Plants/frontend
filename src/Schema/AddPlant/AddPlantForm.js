import React from 'react'
import { useHistory } from "react-router-dom";

function AddPlantForm(props) {
    const { formValues, updateValues, submitForm, disabled, errors } = props;

    const history = useHistory();

    const onSubmit = (evt) => {
        evt.preventDefault();
        submitForm();
        history.push("/addsuccess");
    }

    const onChange = (evt) => {
        const { name, value } = evt.target;
        updateValues(name, value);
    }


    return (
        <div className="addPlantForm">
            <form onSubmit={onSubmit}>
            <h1>Plant Form</h1>
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
                <label>
                    <input 
                        type="text"
                        name="h2oFrequency"
                        placeholder="h2oFrequency"
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
                    <div className="speciesError">
                        {errors.species}
                    </div>
                    <div className="h2oError">
                        {errors.h2oFrequency}
                    </div>
                </div>
                <button id="submitBtn" disabled={disabled}>
                    Add Plant
                </button>
            </form>
        </div>
    )
}

export default AddPlantForm
