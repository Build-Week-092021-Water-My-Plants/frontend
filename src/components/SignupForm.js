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
            .then((res) => {
                console.log('loginform ln:28 response.data', res.data)
                console.log('loginform ln:29 response.data.token', res.data.token)
                // localStorage.setItem('token', payload)
                push('/')
            })
            // setAuth(true);
            .catch((err) => console.log(err))
    }

    return (
        <StyledSignupForm>
            <StyledHeader>
                <h1>WATER MY PLANTS</h1>
                <nav>
                    <Link to="/">Home</Link>
                    <span className='navspans'></span>
                    <Link to="/meet-our-team">Meet&nbsp;our&nbsp;Team</Link>
                    <span className='navspans'></span>
                    <Link to="/login">LogIn</Link>
                </nav>
            </StyledHeader>

                                <StyledChild>
                                    <h1>Sign Up</h1>
                                    <form onSubmit={handleSubmit}>
                                        <div className='inputs'>
                                            <label>Username: &nbsp;
                                                <input
                                                    type='username'
                                                    name='username'
                                                    id='username'
                                                    value={formValue.username}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label>Password: &nbsp;
                                                <input
                                                    type='password'
                                                    name='password'
                                                    id='password'
                                                    value={formValue.password}
                                                    onChange={handleChange}
                                                />
                                            </label>
                                            <label>PhoneNumber: &nbsp;
                                                <input
                                                    type='tel'
                                                    name='phoneNumber'
                                                    pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
                                                    value={formValue.phoneNumber}
                                                    onChange={handleChange}
                                                    placeholder='format=555-666-9999'
                                                />
                                            </label>
                                            <button onSubmit={handleSubmit} >Submit</button>
                                        </div>
                                    </form>
                                </StyledChild>
                            </StyledSignupForm>
                            )
}

                            export default SignupForm;

                            const StyledSignupForm = styled.div`
                            background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
                            background-size: cover;
                            width:100%;
                            height: 85.2vh;
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            flex-direction:column;
                            h1 {
                                color:black;
                            font-size: 3rem;
    }
                            `;
                            const StyledHeader = styled.header`
                            color: ${({ theme }) => theme.secondaryColor};
                            display:flex;
                            justify-content:space-around;
                            align-items:center;
                            width:100%;
                            // position:absolute;
                            // top: 0px;
                            nav {
                                width:30%;
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

// const Container = styled.div`
//     box-sizing: border-box;
//     height: 100vh;
//     background: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
//     background-repeat: no-repeat;
//     background-size: cover;
//     background-position: center;
// `;

// const StyledHeader = styled.header`
//   color: ${({ theme }) => theme.secondaryColor};
//   h1{
                                //       color: white;
                                //   }
                                // `;

                                // const StyledMainPage = styled.div`
                                //   background-image: url("https://images.unsplash.com/photo-1565613408901-269f726b44d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVyJTIwcGxhbnRzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
                                //   background-size: cover;
                                //   height: 85.2vh;
                                //   display: flex;
                                //   justify-content: center;
                                //   align-items: center;
                                //   h1 {
                                //     margin-top: -2%;
                                //     font-size: 3rem;
                                //   }
                                

const StyledChild = styled.div`
    border: 0px;
                            border-radius: 30px;
                            background-color: #f2f2f2;

                            display: flex;
                            flex-direction:column;
                            align-items: center;
                            justify-content: center;
                            width:50%;
                            height: auto;
                            margin: 1% 1%;

                            form {
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
  }

                            button {
                                border - radius: 25px;
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
  }
                            `;
