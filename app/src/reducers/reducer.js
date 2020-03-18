import { GET_DATA } from "../actions/actions"

const initialState = {
    data: [],
    isFetchingData: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_DATA:
            return {
                ...state,
                isFetchingData: true
            }
        default:
            return state;
    }
}