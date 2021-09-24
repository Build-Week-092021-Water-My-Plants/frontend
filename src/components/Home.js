import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    return (
        <StyledHome>
            <header id="header">
                <h1 id="hide"> Water My Plants </h1>
                <nav>
                    {/* <span className="navspans"> */}
                        <Link to="/"> Home </Link>
                    {/* </span>
                    <span className="navspans"> */}
                        <Link to="/plantList"> My Plants </Link>
                    {/* </span>
                    <span className="navspans"> */}
                        <Link to="/meet-our-team"> Meet Our Team </Link>
                    {/* </span> */}
                    <Link to="/logout" > Log Out </Link>
                </nav>
            </header>

            <div className="whole">
                <div className="main">
                    <h3> Tired of forgetting to water that thirsty plant ? </h3>
                    <h1>
                        Welcome to <br />
                        Water My Plants
                    </h1>
                    <div className="button-container">
                        <Link to="/signup">
                            <button className="create-acctBtn"> Sign-up </button>
                        </Link>
                        <Link to="/login">
                            <button className="loginBtn"> Login </button>
                        </Link>
                    </div>
                </div>
            </div>
        </StyledHome>
    );
};

export default Home;

const StyledHome = styled.div`
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    background: url("https://images.unsplash.com/reserve/SLErBhmTnePXNTLk33fw_DSCF3308.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;


    .whole {
        display: flex;
        align-content: center;
        justify-content: center;
        // width: auto;
        // height: auto;
    }

    .main {
        background: rgb(0, 0, 0, .3);
        width: 400px;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-top: 8%;
        margin-bottom: 10%;
        margin-left: none;
        border: none;
        border-radius: 10%;
    }


    header, h1 {
        width: auto;
        display: flex;
        justify-content: flex-end;
    }
    #header{
        background-color: rgb(0, 0, 0, .3);
    }

    nav {
        width: 40%;
        white-space: nowrap;
    }
    nav a {
        border: 1px solid ${(prop) => prop.theme.accentColor};
        padding: 1%;
        margin: 0.2%;
        color: black;
        text-decoration: none;
    }
    nav a:hover {
        border: 1px solid black;
        color: white;
    }

.logout{
    margin-right: 20px;
}

    .main h1 {
        margin: 0 auto;
        font-size: 60px;
        text-align: center;
        color: white;
    }

    .main h3 {
        padding: 3%;
        font-size: 15px;
        color: ${({ theme }) => theme.secondaryColor};
    }

    .button-container  {
        display: flex;
        margin-left: 25%;
    }

    .button-container a {
        display: flex;
        align-items: center;
        background: none;
        margin: 5%;
        text-decoration: none;
    }

    button {
        background-color: ${({ theme }) => theme.secondaryColor};
        padding: 15px;
        font-size: 15px;
        color: #d9d9d9;
        border-radius: 20%;
        border: 1px solid green;
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
    };

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