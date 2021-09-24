import axiosWithAuth from '../helpers/axiosWithAuth';
export const ADD_PLANT = 'ADD_PLANT';
export const NEW_USER = 'NEW_USER';
export const EDIT_PLANT = 'EDIT_PLANT';
export const LOGIN = 'LOGIN';
export const GET_PLANT = 'GET_PLANT';
export const FETCH_START = "FETCH_START";
export const FETCH_PLANT_SUCCESS = "FETCH_PLANT_SUCCESS ";
export const FETCH_FAIL = "FETCH_FAIL";
export const DELETE_PLANT = "DELETE_PLANT";


export const getPlants = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axiosWithAuth().get('plants')
      .then(res => {
        // console.log('actions/index.js ln:17 res', res);
        // console.log('actions/index.js ln:18 res.data', res.data);
        dispatch(fetchPlantSuccess(res.data))
      })
  }
}
export const fetchStart = () => {
  return ({ type: FETCH_START })
}

export const fetchPlantSuccess = (plant) => {
  return ({ type: FETCH_PLANT_SUCCESS, payload: plant })
}

export const fetchFail = () => {
  return ({ type: FETCH_FAIL })
}
export const add = (newPlant) => {
  return { type: ADD_PLANT, payload: newPlant };
};

export const getPlant = (plant) => {
  return { type: GET_PLANT, payload: plant };
};

export const newUser = (newUser) => {
  return { type: NEW_USER, payload: newUser };
};

export const edit = (edited) => {
  return { type: EDIT_PLANT, payload: edited };
};

export const login = (userID) => {
  return { type: LOGIN, payload: userID };
};

export const deletePlant = (plantId) => {
  return { type: DELETE_PLANT, payload: plantId}
}