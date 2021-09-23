import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function EditPlantSuccess() {
    return (
        <>
        <StyledNav>
                <div className="navBar">
                <Link to="/"><h1 className="title">WATER MY PLANTS</h1></Link>
                <nav>
                    <Link to="/">Home</Link>
                    <span className='navspans'></span>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                    <span className='navspans'></span>
                    <Link to="/login">Log-In</Link>
                </nav>
                </div>
        </StyledNav>
        <StyledSuccess>
            <section>
            <div id='edit-success'>
                <h1>You've removed a plant!</h1>
            </div>
            </section>
        </StyledSuccess>
        </>
    )
}
const StyledNav = styled.div`
    .navBar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
        background: #427E36;
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
        background: #6f732f;
    }
`
const StyledSuccess = styled.div`
section{
    height: 100%;
    color: white;
}
`