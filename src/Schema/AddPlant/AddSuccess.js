import React from 'react';
import styled from 'styled-components';

export default function AddSuccess () {
    return (
        <StyledAddSuccess>
           <header>
               <div>
                   {/* <img src="/src/assets/waterMyPlants1.jpg" alt="i am plant"> */}
                       <h1>Success!</h1>
                   {/* </img> */}
               </div>
           </header>
        </StyledAddSuccess>
    )
}

const StyledAddSuccess = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;

    header {
        display:flex;
        justify-content:space-around;
        align-items:center;
        width:100%;
        height:6%;
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
`;
