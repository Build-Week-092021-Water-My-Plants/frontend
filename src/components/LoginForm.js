import React, { useState } from 'react';
import styled from 'styled-components';
import axiosWithAuth from '../helpers/axiosWithAuth';
import { useHistory, Link } from 'react-router-dom';

const LoginForm = () => {
    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
    });
    // const { setAuth, login } = props;
    const { push } = useHistory();

const handleChange = (e) => {
    setFormValue({
        ...formValue,
        [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    LoginForm(formValue);
    axiosWithAuth()
    .post('/login', formValue)
    .then((res)=> {
        console.log('loginform ln:30 response.data', res.data)
        console.log('loginform ln:31 response.data.token', res.data.token)
        // localStorage.setItem('token', payload)
        push('/plantList')
    })
    // setAuth(true);
    .catch((err) => console.log(err))
}

    return (
        <Container> 
        <div>
            <StyledHeader>
            <h1 id='hide'>Log-In</h1>
            <nav>
                    <Link to="/">Home</Link>
                
                    <Link to="/signup">Sign Up</Link>
                
                    <Link to="/meet-our-team">Meet Our Team</Link>
                
            </nav>
                </StyledHeader>
                <StyledChild>
        <form>
            <div className='input-container'>
            <label>Username: </label>
                <input
                type='username'
                name='username'
                id='username'
                value={formValue.username}
                onChange={handleChange}
                />

            <label>Password: </label>
                <input
                type='password'
                name='password'
                id='password'
                value={formValue.password}
                onChange={handleChange}
                />
            <button onSubmit={handleSubmit} >Log In</button>
            </div>
            </form>
            </StyledChild>
        </div>
        </Container>
    )
}

export default LoginForm;


const Container = styled.div `
  background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
  background-size: cover;
  box-sizing:border-box;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  h1 {
    color: black;
    margin-top: none;
    font-size: 2rem;
  }
`;
const StyledHeader = styled.header`
  color: ${({ theme }) => theme.secondaryColor};
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  width: 100vh;
  height: 15%;
  nav {
    width: 35%;
  }
  nav a {
    border: 1px solid ${(prop) => prop.theme.accentColor};
    padding: 1%;
    margin: 0.5%;
    color: black;
    text-decoration: none;
  }
  nav a:hover {
    border: 1px solid black;
    color: white;
  }`;

  const StyledChild = styled.div`
    border: 0px;
    border-radius: 30px;
    background-color: rgb(242, 242, 242, .8);
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    width:50%;
    height: auto;
    margin: 1% 1%;
    margin-left: 25%;
    margin-top: 10%;

    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-items: center;
        width:70%;
        height:auto;
        margin-top: 1%;
        margin-bottom: 3%;
        padding: 10%;
    }

label {
    font-size: 1.5rem;
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
    }`;
