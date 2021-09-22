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
         
        
        <div className="body"> 
        
            <StyledNav>
                <div className="navBar">
                    <h1 className="title">WATER MY PLANTS</h1>
            <nav>
                    <Link to="/">Home</Link>
                    <span className='navspans'></span>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                    <span className='navspans'></span>
                    <Link to="/login">Log-In</Link>
            </nav>
            </div>
            </StyledNav>
        <StyledEditPlants>   
            <div className="loginForm"> 
        <StyledForm>
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
            </StyledForm>
            </div>
            </StyledEditPlants>
            </div>
            
        
    
      
    )
}

export default LoginForm;
// const StyledBackground = styled.div`

// `
const StyledEditPlants = styled.div`
    box-sizing: border-box;
    background: url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80");
    background-size: cover;
    width:auto;
    height: 90vh;
    display: flex;
    justify-content: center;
    padding-top: 5%;
`        

const StyledNav = styled.div`
    .navBar{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 5%;
    }

    .navBar .title {
        color: white;
    }

    nav {
        width:30%;
        display: flex;
        
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
`
const StyledForm = styled.div `

.loginForm {
    display: flex;
    justify-content: center; 
    align-items: center;    
}

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
  }`

// const StyledNav = styled.div`
    
//     .navBar{
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding-left: 5%;
//         background-color: #427E36;
//     }

//     .navBar .title {
//         color: white;
//     }

//     nav {
//         width:30%;
//         display: flex;
        
//     }

//     nav a {
//         border:1px solid ${prop => prop.theme.accentColor};
//         padding:1%;
//         margin:0.2%;
//         color: black;
//         text-decoration:none;
//     }

//     nav a:hover {
//         border:1px solid black;
//         color: white;
//     }

// `
 