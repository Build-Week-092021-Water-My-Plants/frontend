import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
    return (
        <StyledHome>
            <header>
                <h1 id="hide"> Water My Plants </h1>
                <nav>
                    <span className="navspans">
                        <Link to="/"> Home </Link>
                    </span>
                    <span className="navspans">
                        <Link to="/plants"> My Plants </Link>
                    </span>
                    <span className="navspans">
                        <Link to="/meet-our-team"> Meet Our Team </Link>
                    </span>
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
    height: 100vh;
    background: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

    .whole {
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .main {
        background: rgb(66, 126, 54, .5);
        width: 40%;
        margin: 0 auto;
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-top: 10%;
        border: none;
    }

    header, h1 {
        margin: 0 10px;
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
        color: white;
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
    }

    button {
        background-color: ${({ theme }) => theme.secondaryColor};
        padding: 15px;
        text-decoration: none;
        font-size: 15px;
        color: #d9d9d9;
    }

    @media (max-width: 500px) {
        font-size: 14px;

        #hide {
        display: none;
        }

        .main {
            margin-top: 40%;
            height: 450px;
            width: 200px;
        }

        nav {
            width: 100%;
        }

        .button-container {
            margin-left: 13%;
            width: 100%;
        }
    };

    @media (max-width: 800px) {
        font-size: 14px;
        
        #hide {
                display: none;
            }
        .main {
            margin-top: 40%;
            height: 450px;
            width: 500px;
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