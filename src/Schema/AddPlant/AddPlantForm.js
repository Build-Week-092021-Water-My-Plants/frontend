import React from 'react'
import { useHistory } from "react-router-dom";

function AddPlantForm(props) {
    const { formValues, updateValues, submitForm, disabled } = props;

    const history = useHistory();

    const onSubmit = (evt) => {
        evt.preventDefault();
        submitForm();
        history.push("/AddSuccess");
    }

    const onChange = (evt) => {
        const { name, value } = evt.target;
        updateValues(name, value);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
            <h1>Plant Form</h1>
                {/* <label> ID &nbsp;
                    <input 
                        type="number"
                        name="id"
                        value={formValues.id}
                        onChange={onChange}
                    />
                </label> */}
                <label> Nickname &nbsp;
                    <input 
                        type="text"
                        name="nickname"
                        placeholder="Name"
                        value={formValues.nickname}
                        onChange={onChange}
                    />
                </label>
                <label> Species &nbsp;
                    <input 
                        type="text"
                        name="species"
                        placeholder="Species"
                        value={formValues.species}
                        onChange={onChange}
                    />
                </label>
                <label> h2oFrequency &nbsp;
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
                <button id="submitBtn" disabled={disabled}>
                    Add
                </button>
            </form>
        </div>
    )
}

export default AddPlantForm
