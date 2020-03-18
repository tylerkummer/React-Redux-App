import { GET_DATA, UPDATE_DATA, SET_ERROR } from "../actions/actions"

const initialState = {
    data: [],
    isFetchingData: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    console.log("Payload: ", action.payload);
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true,
                data: []
            };
        case UPDATE_DATA:
            return {
                ...state,
                data: action.payload,
                isFetchingData: false
            };
        case SET_ERROR:
            return {
                ...state,
                isFetchingData: false,
                error: action.payload
            };
        default:
            return state;
    }
}