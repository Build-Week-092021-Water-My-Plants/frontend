import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";

const SignupForm = () => {
    const [formValue, setFormValue] = useState({
        username: "",
        password: "",
        phoneNumber: "",
    });
    const { push } = useHistory();

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        SignupForm(formValue);
        axios
            .post("/", formValue)
            .then((res) => {
                console.log("loginform ln:28 response.data", res.data);
                console.log("loginform ln:29 response.data.token", res.data.token);
                // localStorage.setItem('token', payload)
                push("/");
            })
            // setAuth(true);
            .catch((err) => console.log(err));
    };

    return (
        <StyledSignupForm>
            <StyledHeader>
                    <h1>WATER MY PLANTS</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <span className="navspans"></span>
                    <Link to="/meet-our-team">Meet&nbsp;our&nbsp;Team</Link>
                    <span className="navspans"></span>
                    <Link to="/login">LogIn</Link>
                </nav>
            </StyledHeader>

            <StyledChild>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label>
                            {/* Username: &nbsp; */}
                            <input
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Username"
                                value={formValue.username}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            {/* Password: &nbsp; */}
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Password"
                                value={formValue.password}
                                onChange={handleChange}
                            />
                        </label>
                        <label>
                            {/* PhoneNumber: &nbsp; */}
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                value={formValue.phoneNumber}
                                onChange={handleChange}
                                placeholder="format=555-666-9999"
                            />
                        </label>
                        <button onSubmit={handleSubmit}>Submit</button>
                    </div>
                </form>
            </StyledChild>
        </StyledSignupForm>
    );
};

export default SignupForm;

const StyledSignupForm = styled.div`
  background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
  background-size:cover;
  box-sizing:border-box;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  font-size: 1.3rem;
  h1 {
    color: black;
    font-size: 2rem;
  }
  //MEDIA QUERY SECTION

  @media (max-width: 800px) {
    font-size: 1rem;
      h1 {
          color:${({ theme }) => theme.accentColor};
          font-size:1.5rem;
      }
      header {
          height:4%;
          justify-content:space-evenly;
      }
      nav {
          width: 100%;
      }
    }

    @media (max-width: 600px) {
      font-size: 0.9rem;
      h1 {
          color:yellow;
          font-size:1.9rem;
      }
      header {
          height:3%;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
      }
      nav {
          width: 50%;
      }
  }
`;//SignupForm END

const StyledHeader = styled.header`
  color: ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 6%;
  nav {
    width: 30%;
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
`;//StyledHeader END

const StyledChild = styled.div`
    border: 0px;
    /* border-radius: 30px;
    background-color: #f2f2f2; */
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width:50%;
    height: auto;
    margin: 5% 1%;

    /* form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        width:70%;
        height:auto;
        margin-top:-3%;
        margin-bottom:2%;
    }

    .inputs {
        display: flex;
        justify-content:center;
        align-items:center;
        flex-direction:column;
        padding:2% 2%;
    }

    input {
        width:auto;
        height:auto;
        padding: 3%;
        margin: 2%;
        border: none;
        border-radius: 25px;
    }

    button {
        border-radius: 25px;
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        background: rgb(34, 193, 195);
        background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284b63 100%);
        border: 0px;
        cursor: pointer;
        transition: opacity 0.25s ease-out;
        margin-top:5%;
    }
    button:hover {
        opacity: 0.85;
    } */
    form {
        background: rgba( 255, 255, 255, 0.2 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        border-radius:10px;
        width:400px;
        margin:2% 0%;
        padding:2% 2%;
    }
    input {
        width:auto;
        height:auto;
        padding: 5%;
        margin: 5%;
        border: none;
        border-radius: 25px;
        text-align:center;
    }
    button {
        width: 80%;
        height: 40px;
        font-size: 1.3rem;
        color: white;
        font-weight: 700;
        border: 0px;
        cursor: pointer;
        transition: opacity 0.25s ease-out;
        margin-top:5%;
        border-radius: 10px;
        background-color: rgba( 110, 115, 47, 0.2 );
        border: 1px solid white;
    }
    button:hover {
        opacity: 0.85;
        color: white;
        background: rgba( 110, 115, 47, 0.2 );
        box-shadow: inset 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 6px );
        -webkit-backdrop-filter: blur( 6px );
        border-radius: 10px;
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        transition: 0.3s;
    }
`;//StyledChild END
