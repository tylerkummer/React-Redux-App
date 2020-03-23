import axios from 'axios';

export const GET_DATA = "GET_DATA";
export const UPDATE_DATA = "UPDATE_DATA";
export const SET_ERROR = "SET_ERROR";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get('https://api.pokemontcg.io/v1/cards')
        .then(res => {
            console.log("Response", res.data);
            dispatch({type: UPDATE_DATA, payload: res.data})
        })
        .catch(err => {
            console.error('Error: ', err)
            dispatch({ type: SET_ERROR, payload: "Error fetching data from api" });
        });
}