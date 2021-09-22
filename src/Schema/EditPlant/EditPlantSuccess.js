import React from 'react';
import styled from 'styled-components';

export default function EditPlantSuccess() {
    return (
        <StyledSuccess>
        <section>
            <div id='edit-success'>
                <h1>You've removed a plant!</h1>
            </div>
        </section>
        </StyledSuccess>
    )
}

const StyledSuccess = styled.div`
section{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
}
`