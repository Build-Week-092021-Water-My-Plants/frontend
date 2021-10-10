import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";



const MeetOurTeam = () => {
    return(
    <StyledTeam>
        <div className='whole'>
        <StyledHeader>
            <h1 id='hide'>Meet Our Team</h1>
            <nav>
                        <Link to="/">Home</Link>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">LogIn</Link>
                    </nav>
        </StyledHeader>

            <div className='main'>

                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://avatars.githubusercontent.com/u/16638790?v=4'
                        alt='profile pic for rick'
                    />
                    <h2>Rick Mansfield</h2>
                    <h3>Full Stack Developer | Fontend Team Lead</h3>
                </div>

                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U021YSANWNS-186d43f1f01d-512'
                        alt='profile pic of Jordan Gearheart'
                    />
                    <h2>Jordan Gearheart</h2>
                    <h3>Full Stack Developer | Backend Team Lead</h3>
                </div>

                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U021QR009N3-3544844f0026-512'
                        alt='profile of Danny Savaliya'
                    />
                    <h2>Danny Savaliya</h2>
                    <h3>Full Stack Developer | Backend Consultant</h3>
                </div>

                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U0225J7RTT4-531a25aebb6f-512'
                        alt='profile pic for ADD NAME'
                    />
                    <h2>Sebastian Leal </h2>
                    <h3>Fullstack Web & Computer Science Engineer</h3>
                </div>
                
                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U025FD6HPDG-f913138f2f98-72'
                        alt='profile of ADD NAME'
                    />
                    <h2>Alan Waddell </h2>
                    <h3>Full Stack Developer</h3>
                </div>

                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U025UM0EW4T-9fe7d300bbf6-512'
                        alt='Abraham'
                    />
                    <h2>Abraham Garcia</h2>
                    <h3>Fullstack Web & Computer Science Engineer</h3>
                </div>


                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U02515419TL-cc9d6539a5a0-512'
                        alt='Adam Smith'
                    />
                    <h2>Adam Smith</h2>
                    <h3>Fullstack Web & Computer Science Engineer</h3>
                </div>
{/* 
                <div className='card'>
                    <img
                        className='card-photo'
                        src=''
                        alt='profile of ADD NAME'
                    />
                    <h2>ADD TEAM MEMBER NAME</h2>
                    <h3>add Role</h3>
                </div>
                
                <div className='card'>
                    <img
                        className='card-photo'
                        src=''
                        alt='profile of ADD NAME'
                    />
                    <h2>ADD TEAM MEMBER NAME</h2>
                    <h3>add Role</h3>
                </div> */}
                {/* TEMPLATE */}
                {/* <div className='card'>
                    <img
                        className='card-photo'
                        src=''
                        alt='profile of ADD NAME'
                    />
                    <h2>ADD TEAM MEMBER NAME</h2>
                    <h3>add Role</h3>
                </div> */}
            </div>
        </div>
    </StyledTeam>

    )
}

export default MeetOurTeam

const StyledHeader = styled.header`
  color: white;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: auto;
  height: 15%;
  nav {
    width: 35%;
  }

  nav a {
    border: 1px solid ${(prop) => prop.theme.accentColor};
    padding: 1%;
    color: black;
    text-decoration: none;
  }
  nav a:hover {
    border: 1px solid black;
    color: white;
  }

  @media (max-width: 500px) {
    font-size: 14px;

    #hide {
    display: none;
    }

    .main {
        margin-top: 40%;
        height: auto;
        width: auto;
    }

    nav {
        width: 100%;
        display:flex;
        flex-direction: column;
        flex-grow: 4;
    }

    .button-container {
        margin-left: 13%;
        width: 100%;
        text-decoration: none;
    }
    .whole{
        width: 100%;
    }

  @media (max-width: 800px) {
    font-size: 14px;
    
    #hide {
            display: none;
        }
    .main {
        margin-top: 20%;

    }
    nav {
        width: 100%;
    }
    
    .button-container {
        margin-left: 19%;
        width: 100%;
    }
}
  `;
const StyledTeam = styled.div`
    box-sizing: border-box;
    

    .whole {
        width: 100%;
        height: 100%;
        background-color: white;
    }

    .main {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-evenly;
        margin-top: 2%;
    }

    img {
        width: 300px;
        height: 300px;
    }
    
    .card {
        width: 300px;
        padding: 1%;
        margin-bottom: 2%;
        margin-right: 1%;
        background-color: black;
        border-radius: 7%;
    }
    .card p {
        text-align: center;
    }

    .heading h1 {
        font-size: 50px;
        color: white;
        flex-direction: row;
        background-color: ${({ theme }) => theme.primaryColor};
        width: 45%;
        margin: 0 auto;
    
    }

    h2 {
        text-align: center;
        color: ${({ theme }) => theme.secondaryColor};
        margin: 0;
     }

    h3 {
        text-align: center;
        color: ${({ theme }) => theme.secondaryColor};
        font-size: 12px;
    }

    header {
        margin-bottom: 2%;
        
    }



    @media (max-width: 500px) {
        #hide {
            display: none;
        }
    }

    @media (max-width: 800px) {
        #hide {
            display: none;
        }
    }
`;