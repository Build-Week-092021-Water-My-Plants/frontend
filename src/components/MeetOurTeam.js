import React from 'react';
import { Link } from 'react-router-dom'
import styled from "styled-components";

const StyledTeam = styled.div`
    box-sizing: border-box;

    .whole {
        width: 100%;
        height: 100%;
        background-color: #D9D9D9;
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
        box-shadow: 5px 10px #284b63;
        border: 1px solid black;
        margin-bottom: 2%;
        margin-right: 1%;
    }
    .card p {
        text-align: center;
    }

    .heading h1 {
        font-size: 50px;
        color: white;
        flex-direction: row;
        background-color: #284b63;
        box-shadow: 5px 5px gray;
        width: 35%;
        margin: 0 auto;
    
    }

    h2 {
        text-align: left;
        color: #284b63;
        margin: 0;
     }

    h3 {
        text-align: center;
        color: #284b63;
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
`

const MeetOurTeam = () => {
    return(
    <StyledTeam>
        <div className='whole'>
            <header>
                <h1 id='hide'>Water My Plants</h1>
                <nav>
                    <span className="navspans"><Link to="/">Home</Link></span>
                    <span className="navspans"><Link to="/meet-our-team">Meet our Team</Link></span>
                </nav>
            </header>

            <div className='heading'>
                <h1>Meet Our Team</h1>
            </div>

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
                        src='https://ca.slack-edge.com/ESZCHB482-U0225J7RTT4-531a25aebb6f-512'
                        alt='profile pic for ADD NAME'
                    />
                    <h2>Sebastian Leal </h2>
                    <h3>Fullstack Web & Computer Science Engineer</h3>
                </div>
                
                <div className='card'>
                    <img
                        className='card-photo'
                        src='https://ca.slack-edge.com/ESZCHB482-U025FD6HPDG-1ea06076331a-512'
                        alt='profile of ADD NAME'
                    />
                    <h2>Alan Waddell </h2>
                    <h3>Fullstack Web & Computer Science Engineer</h3>
                </div>

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
                </div>

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
                </div>
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
