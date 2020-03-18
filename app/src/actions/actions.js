import axios from 'axios';

export const GET_DATA = "GET_DATA";

export const getData = () => dispatch => {
    dispatch({ type: GET_DATA });
    axios.get('https://api.pokemontcg.io/v1/cards')
        .then(res => console.log(res))
        .catch(err => console.error('Error: ', err));
}