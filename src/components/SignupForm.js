import React, { useState } from 'react'; 
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';




const SignupForm = () => {

    const [formValue, setFormValue] = useState({
        username: '',
        password: '',
        phoneNumber: '',
    })
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
        .post('/', formValue)
        .then((res)=> {
            console.log('loginform ln:28 response.data', res.data)
            console.log('loginform ln:29 response.data.token', res.data.token)
            // localStorage.setItem('token', payload)
            push('/')
        })
        // setAuth(true);
        .catch((err) => console.log(err))
    }


    return (
        <Container> 
        <div>
            <h1>Sign-Up</h1>
            <nav>
                <Link to="/meet-our-team">Meet Our Team</Link>
                <span className='navspans'></span>
                <Link to="/">Home</Link>
                <span className='navspans'></span>
                <Link to="/login">Log-In</Link>
                <span className='navspans'></span>
            </nav>
        <form onSubmit={handleSubmit}>

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

            <label>PhoneNumber: </label>
                <input
                type='tel'
                name='phoneNumber'
                pattern= '[0-9]{3}-[0-9]{3}-[0-9]{4}'
                value={formValue.phoneNumber}
                onChange={handleChange}
                placeholder='format=555-666-9999'
                />
            <button onSubmit={handleSubmit} >Log In</button>
            
            </form>
        </div>
        </Container>
    )
}

export default SignupForm;

const Container = styled.div ``;
