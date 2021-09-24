import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { connect } from "react-redux";
import { getPlants, fetchFail, deletePlant } from "../actions";
import { Link } from "react-router-dom";
import axiosWithAuth from "../helpers/axiosWithAuth";

const PlantList = (props) => {
    console.log("PlantList.js ln:10 props", props);
    const { plant, isFetching, error } = props;
    // const [plants, setPlants] = useState([]);
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

    // const deletePlant = (id) => {
    //     setPlants(plants.filter((plant) => plant.id !== id));
    // };

    const deleteItem = (plant) => {
        console.log('PlantList.js ln:31 plant', plant);
        axiosWithAuth()
            .delete(`plants/${plant.plant_id}`)
            .then((res) => {
                console.log(res);
                console.log('Plant.plant_id', plant.plant_id);
                props.deletePlant(plant.plant_id);
                // axiosWithAuth()
                //     .get("/api/plants")
                //     .then((res) => {
                //         // console.log(res)
                //         setPlants(res.data);
                //         // console.log('plants: ', plants);
                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     });
            })
            .catch((err) => console.log(err));
    };

    const editPlant = (plant) => {
        console.log('PlantList.js ln:51 plant', plant);
        // axiosWithAuth()
        //     .delete(`/api/plants/${plant.plantID}`)
        //     .then((res) => {
        //         // console.log(res);
        //         deletePlant(plant.plantID);
        //         history.push("/addPlant");
        //     })
        //     .catch((err) => console.log(err));
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
                </nav>
            </header>
            <main className="plant-list">
                {plant.map((plant) => (
                    <div className="plant-card" key={plant.plantID}>
                        <div className="plant-details">
                            <h2>{plant.nickname}</h2>
                            <p>Amount of Water Needed: {plant.h2oAmount}</p>
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
  .plant-card {
    background-color: #fff;
    border: 0;
    box-shadow: 0 -1px 0 #e0e0e0, 0 0 2px rgba(0, 0, 0, 0.12),
      0 2px 4px rgba(0, 0, 0, 0.24);
    padding: 1rem;
    cursor: pointer;
    position: relative;
    margin: 1rem auto;
  }
`;
