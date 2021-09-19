import React from 'react'
import { useHistory } from "react-router-dom";

function AddPlantForm() {
    const history = useHistory();
    const onSubmit = (evt) => {
        evt.preventDefault();
        // submit();
        history.push("/AddSuccess");
    }
    return (
        <div>
            <form onSubmit={onSubmit}>
            <h1>rendered from addPlantForm.js Lets get some form going on</h1>
            </form>
        </div>
    )
}

export default AddPlantForm
