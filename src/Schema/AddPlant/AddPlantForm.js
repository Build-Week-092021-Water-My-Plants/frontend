import React from 'react'
import { useHistory } from "react-router-dom";

function AddPlantForm() {
    const history = useHistory();
    const onSubmit = (evt) => {
        history.push("/AddSuccess");
        evt.preventDefault();
        // submit();
    }
    return (
        <div>
            <h1>rendered from addPlantForm.js Lets get some form going on</h1>
        </div>
    )
}

export default AddPlantForm
