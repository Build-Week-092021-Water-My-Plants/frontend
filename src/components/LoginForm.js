import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../actions';

const LoginForm = (props) => {
    console.log('Login.js ln:5 props', props);
    const [credentials, setCredentials] = useState(
        {
            username: "",
            password: "",
            phone_number: "",
        }
    )
    const [error, setError] = useState("");
    const { push } = useHistory();

    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (!credentials.username || !credentials.password) {
            return (setError("Username or Password not valid."))
        } else {
            axios.post('https://waterplantsbackend.herokuapp.com/api/auth/login', credentials)
                .then(res => {
                    console.log('Login.js ln:30 res', res);//Use Lambda School to test
                    console.log('Login.js ln:31 res.data', res.data);
                    // console.log('Login.js ln:32 res.data', res.data.payload);
                    localStorage.setItem("token", res.data.payload);
                    props.login(res.data.user_id);
                    push('plantList');
                    setError("");
                })
                .catch(err => {
                    setError("Error logging in");
                })
        }
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
                    <Link to="/signup">Sign-Up</Link>
                </nav>
                </div>
        </StyledNav>
    <StyledEditPlants>   
            <div className="loginForm"> 
        <StyledForm>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit} >
                <label>Username: </label>
                    <input
                    type='username'
                    name='username'
                    id='username'
                    value={credentials.username}
                    onChange={handleChange}
                    />
                <label>Password: </label>
                    <input
                    type='password'
                    name='password'
                    id='password'
                    value={credentials.password}
                    onChange={handleChange}
                    />
                <button>Log In</button>
            </form>
        </StyledForm>
            </div>
        </StyledEditPlants>
            </div>
    )
}
        
//         <Container>
//             <div>
//                 <StyledHeader>
//                     <h1 id='hide'>Log-In</h1>
//                     <nav>
//                         <Link to="/">Home</Link>
//                         <Link to="/signup">Sign Up</Link>
//                         <Link to="/meet-our-team">Meet Our Team</Link>
//                     </nav>
//                 </StyledHeader>
//                 <StyledChild>

//                     <form onSubmit={handleSubmit}>
//                         <div className='input-container'>
//                             <label>Username: </label>
//                             <input
//                                 type='username'
//                                 name='username'
//                                 id='username'
//                                 value={credentials.username}
//                                 onChange={handleChange}
//                             />

//                             <label>Password: </label>
//                             <input
//                                 type='password'
//                                 name='password'
//                                 id='password'
//                                 value={credentials.password}
//                                 onChange={handleChange}
//                             />

//                             <label>Phone number: </label>
//                             <input
//                                 type="tel"
//                                 name="phoneNumber"
//                                 pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                                 placeholder="format=555-666-9999"
//                                 value={credentials.phone_number}
//                                 onChange={handleChange}
//                             />
//                             <button >Log In</button>
//                         </div>
//                     </form>
//                 </StyledChild>
//                 <p id="error" className="error">{error}</p>
//             </div>
//         </Container>
// >>>>>>> main

// export default LoginForm;
export default connect (null, {login})(LoginForm);


const StyledEditPlants = styled.div`
    box-sizing: border-box;
    background: url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1380&q=80");
    background-size: cover;
    width:100%;
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 5%;
`        
const StyledNav = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;

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
    }
`;

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
        margin-bottom:20%;
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

    body {
        background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
        background-size: cover;
        box-sizing:border-box;
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
        h1 {
            color: black;
            margin-top: none;
            font-size: 2rem;
        }
    }
`;
// const StyledHeader = styled.header`
//   color: ${({ theme }) => theme.secondaryColor};
//   display: flex;
//   justify-content: flex-end;
//   align-items: baseline;
//   width: 100vh;
//   height: 15%;
//   nav {
//     width: 35%;
//   }
//   nav a {
//     border: 1px solid ${(prop) => prop.theme.accentColor};
//     padding: 1%;
//     margin: 0.5%;
//     color: black;
//     text-decoration: none;
//   }
//   nav a:hover {
//     border: 1px solid black;
//     color: white;
//   }`;

//   const StyledChild = styled.div`
//     border: 0px;
//     border-radius: 30px;
//     background-color: rgb(242, 242, 242, .8);
//     display: flex;
//     flex-direction:column;
//     align-items: center;
//     justify-content: center;
//     width:50%;
//     height: auto;
//     margin: 1% 1%;
//     margin-left: 25%;
//     margin-top: 10%;

//     form {
//         display: flex;
//         flex-direction: column;
//         align-items: center;
//         justify-items: center;
//         width:70%;
//         height:auto;
//         margin-top: 1%;
//         margin-bottom: 3%;
//         padding: 10%;
//     }

// label {
//     font-size: 1.5rem;
// }

//     .inputs {
//         display: flex;
//         justify-content:center;
//         align-items:center;
//         flex-direction:column;
//         padding:2% 2%;
//     }

//     input {
//         width:auto;
//         height:auto;
//         padding: 3%;
//         margin: 2%;
//         border: none;
//         border-radius: 25px;
//     }

//     button {
//         border-radius: 25px;
//         width: 80%;
//         height: 40px;
//         font-size: 1.3rem;
//         color: white;
//         font-weight: 700;
//         background: rgb(34, 193, 195);
//         background: linear-gradient(90deg, rgba(34, 193, 195, 1) 0%, #284b63 100%);
//         border: 0px;
//         cursor: pointer;
//         transition: opacity 0.25s ease-out;
//         margin-top:5%;
//     }
//     button:hover {
//         opacity: 0.85;
//     }`;

//  const Container = styled.div`
//    background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
//    background-size: cover;
//    box-sizing:border-box;
//    width: 100%;
//    height: 100vh;
//    display: flex;
//    justify-content: flex-start;
//    align-items: center;
//    flex-direction: column;
//    h1 {
//      color: black;
//      margin-top: none;
//      font-size: 2rem;
//    }
//  `;

//  const StyledHeader = styled.header`
//    color: ${({ theme }) => theme.secondaryColor};
//    display: flex;
//    justify-content: flex-end;
//    align-items: baseline;
//    width: 100vh;
//    height: 15%;
//    nav {
//      width: 35%;
//    }
//    nav a {
//      border: 1px solid ${(prop) => prop.theme.accentColor};
//      padding: 1%;
//      margin: 0.5%;
//      color: black;
//      text-decoration: none;
//    }
//    nav a:hover {
//      border: 1px solid black;
//      color: white;
//    }
// `;

//  const StyledChild = styled.div`
//      border: 0px;
//      border-radius: 30px;
//      background-color: rgb(242, 242, 242, .8);
//      display: flex;
//      flex-direction:column;
//      align-items: center;
//      justify-content: center;
//      width:40%;
//      height: auto;
//      margin: 1% 1%;
//      margin-left: 25%;
//      margin-top: 10%;
// `;

// >>>>>>> main
    
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         padding-left: 5%;
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
//         background-color: #6f732f;
//     }
// `