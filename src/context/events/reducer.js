import {GET_EVENTS, NEW_EVENT, SET_LOADING} from '../action-types';

export default (state, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return {
                ...state,
                events: action.payload,
                loading: false
            };
        case SET_LOADING:
            return {
                ...state,
                loading: true
            };
        case NEW_EVENT:
            return {
                ...state,
                events: [...state.events, action.payload],
                loading: false
            };
        default:
            return state
    }
}
