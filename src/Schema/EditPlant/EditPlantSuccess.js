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
                    <Link to="/plantList"> My Plants </Link>
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
                <h1>You're Plant Edit is Complete!</h1>
                <h2>Use the Navigation choices above</h2>
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
        width:100%;
        height:6%;
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
    /HEADER SECTION
    header {
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:6%;
    }
    nav {
        width:30%;
        white-space:nowrap;
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
    }
`
const StyledSuccess = styled.div`
section{
    height: 100%;
    color: white;
}
`