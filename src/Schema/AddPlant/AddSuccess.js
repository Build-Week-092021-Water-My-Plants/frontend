import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function AddSuccess () {
    return (
        <StyledAddSuccess>
<header>

                    <h1>Success! </h1>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/login">Log-In</Link>
                    <Link to="/plantList"> My Plants </Link>
                    <Link to="/addPlant"> Add Plants </Link>
                    <Link to="/meet-our-team">Meet Our Team</Link>
                </nav>
            </header>
            <h2>Click the navigation for your next move</h2>
        </StyledAddSuccess>
    )
}

// const StyledAddSuccess = styled.div`
//     display:flex;
//     justify-content:center;
//     align-items:center;
//     flex-direction:column;

//     header {
//         display:flex;
//         justify-content:space-around;
//         align-items:center;
//         width:100%;
//         height:6%;
//     }

//     //MEDIA QUERY SECTION
//     @media (max-width: 800px) {
//     font-size: 1rem;
//       h1 {
//           color:${({ theme }) => theme.accentColor};
//           font-size:1.5rem;
//       }
//       header {
//           height:4%;
//           justify-content:space-evenly;
//       }
//       nav {
//           width: 100%;
//           justify-content: space-between;
//       }
//     }

//     @media (max-width: 600px) {
//       font-size: 0.9rem;
//       h1 {
//           color:yellow;
//           font-size:1.9rem;
//       }
//       header {
//           height:auto;
//           display:flex;
//           justify-content:center;
//           align-items:center;
//           flex-direction:column;
//       }
//       nav {
//           width: 50%;
//       }
//   }
// `;
const StyledAddSuccess = styled.div`
    background-image: url("https://media.istockphoto.com/photos/hand-watering-young-plants-in-growing-picture-id1126962479?b=1&k=20&m=1126962479&s=170667a&w=0&h=Pjzibz8tfGau4ah9dNkZs8wycHCdD0KMgZHr38E7dHg=");
    background-size: cover;
    background-color: ${prop => prop.theme.secondaryColor};
    box-sizing:border-box;
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:0%;

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
          height:auto;
          display:flex;
          justify-content:center;
          align-items:center;
          flex-direction:column;
      }
      nav {
          width: 50%;
      }
  }
//HEADER SECTION
    header {
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:6%;
    }
    nav {
        width:30%;
        white-space:nowrap;
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

`;
