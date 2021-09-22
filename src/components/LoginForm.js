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
            <header>
            {/* <h1 id='hide'>Log-In</h1> */}
            <nav>
                <span className='navspans'>
                    <Link to="/">Home</Link>
                </span>
                <span className='navspans'>
                    <Link to="/signup">Sign Up</Link>
                </span>
                <span className='navspans'>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                </span>
            </nav>
            </header>
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
        </div>
        </Container>
    )
}

export default LoginForm;


const Container = styled.div `
box-sizing: border-box;
height: 100vh;
background: url("");
background-repeat: no-repeat;
background-size: cover;
background-position: center;

  nav {
      display: flex;
      justify-content: flex-end; 
      padding: 25px 60px 25px 0; 
      gap: 15px;
      border: 1px solid gray; 
  }

  .input-container {
      display: flex;
      flex-direction: column; 
      justify-content: center;
      border: 1px solid black; 
      background-color: gray; 
      padding: 30px;
      color: white; 
      width: 40%; 
      border-radius: 10px;
  }
   button {
       margin: 5px; 
       border-radius: 10px;
   }
   input{ 
       border-radius: 10px; 
       margin: 5px; 
   }
  `
  ;