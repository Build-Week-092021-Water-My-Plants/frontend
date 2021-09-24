import React, { useEffect } from "react";
import styled from "styled-components";
// import { useHistory } from "react-router";
import { connect } from "react-redux";
import { getPlants, fetchFail, deletePlant } from "../actions";
import { useHistory, Link } from 'react-router-dom';

import axiosWithAuth from "../helpers/axiosWithAuth";

const PlantList = (props) => {
    // console.log("PlantList.js ln:10 props", props);
    const { plant, isFetching, error } = props;
    const history = useHistory();

    useEffect(() => {
        props.getPlants();
    }, []);

    if (isFetching) {
        return <h2>Fetching Plant Stand By...</h2>;
    }
    if (error) {
        return <h2>Error: {error}</h2>;
    }

    const deleteItem = (plant) => {
        // console.log('PlantList.js ln:27 plant', plant);
        axiosWithAuth()
            .delete(`plants/${plant.plant_id}`)
            .then((res) => {
                console.log(res);
                console.log('Plant.plant_id', plant.plant_id);
                props.deletePlant(plant.plant_id);

            })
            .catch((err) => console.log(err));
    };

    const editPlant = (plant) => {
        console.log('PlantList.js ln:51 plant', plant);
        deleteItem(plant);
        history.push("editPlant");
    };

    return (
        <Plantlist>
            <header>
                <h1 id="hide"> Water My Plants </h1>
                <nav>
                    <Link to="/"> Home </Link>
                    <Link to="/plantList"> My Plants </Link>
                    <Link to="/addPlant"> Add Plants </Link>
                    <Link to="/meet-our-team"> Meet Our Team </Link>
                    <Link to="/logout">Logout</Link>
                </nav>
            </header>
            <main className="plant-list">
                {plant.map((plant) => (
                    <div className="plant-card" key={plant.plant_id}>
                        <div className="plant-details">
                            <h2>{plant.nickname}</h2>
                            <p>Amount of Water Needed: {plant.h2oFrequency}</p>
                            <p>Species: {plant.species}</p>
                            <button onClick={() => editPlant(plant)}>Edit</button>{" "}
                            <button onClick={() => deleteItem(plant)}>Delete</button>
                        </div>
                    </div>
                ))}
            </main>
        </Plantlist>
    );
};

const mapStateToProps = (state) => {
    return {
        plant: state.plantList,
        isFetching: state.isFetching,
        error: state.error,

    };
};

export default connect(mapStateToProps, { getPlants, fetchFail, deletePlant })(PlantList);

const Plantlist = styled.div`
    height: 100%;
    width: 100%;
    background: url("https://images.unsplash.com/reserve/SLErBhmTnePXNTLk33fw_DSCF3308.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

  .plant-card {
    background-color: rgb(250, 250, 250, .4);
    border: 0;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.24);
    padding: 1rem;
    cursor: pointer;
    position: relative;
    margin: 1rem auto;
    border-radius: 10%;
  }

  .plant-list{
      display: flex;
      flex-wrap: wrap;
  }
  header, h1 {
    width: auto;
    display: flex;
    justify-content: flex-end;
}


nav {
    width: 40%;
    white-space: nowrap;
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





@media (max-width: 500px) {
    font-size: 14px;

    #hide {
    display: none;
    }

    .main {
        margin-top: 40%;
        height: auto;
        width: auto;
    }

    nav {
        width: 100%;
        display:flex;
        flex-direction: column;
        flex-grow: 4;
    }

    .button-container {
        margin-left: 13%;
        width: 100%;
        text-decoration: none;
    }
    .whole{
        width: 100%;
    }
};

@media (max-width: 800px) {
    font-size: 14px;
    
    #hide {
            display: none;
        }
    .main {
        margin-top: 20%;

    }
    nav {
        width: 100%;
    }
    
    .button-container {
        margin-left: 19%;
        width: 100%;
    }
}
`;
