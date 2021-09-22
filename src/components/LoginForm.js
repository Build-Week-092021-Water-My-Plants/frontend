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
            <h1>Log-In</h1>
            <nav>
                <Link to="/meet-our-team">Meet Our Team</Link>
                <span className='navspans'></span>
                <Link to="/">Home</Link>
                <span className='navspans'></span>
                <Link to="/signup">Sign Up</Link>
                <span className='navspans'></span>
            </nav>
        <form>

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
            
            </form>
        </div>
        </Container>
    )
}

export default LoginForm;


const Container = styled.div ``;

