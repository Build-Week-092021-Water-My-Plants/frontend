import React from 'react'
import { useHistory } from "react-router-dom";

function AddPlantForm(props) {
    const { formValues, updateValues, submit } = props;

    const history = useHistory();
    const onSubmit = (evt) => {
        evt.preventDefault();
        // submit();
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
                <label> h20Frequency &nbsp;
                    <input 
                        type="text"
                        name="h2ofrequency"
                        placeholder="h2oFrequency"
                        value={formValues.h2oFrequency}
                        onChange={onChange}
                    />
                </label>
                <label> Image &nbsp;
                    <input 
                        type="image"
                        src={formValues.image}
                        alt="a plant!"
                        width="48"
                        height="48"
                        onChange={onChange}
                    />
                </label>
            </form>
        </div>
    )
}

export default AddPlantForm
