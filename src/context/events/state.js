import React, {useReducer} from 'react';
import EventContext from './context';
import EventReducer from './reducer';
import {GET_EVENTS, SET_LOADING} from '../action-types';
import axios from "axios";

const EventState = props => {
    const initialState = {
        events: [],
        loading: false
    };

    const [state, dispatch] = useReducer(EventReducer, initialState);

    const getEvents = async (name) => {
        setLoading();
        const result = await axios.get('http://localhost:8080/allevents');
        const events = result.data;
        dispatch({
            type: GET_EVENTS,
            payload: name ? events.filter(item => (item.name.toLowerCase()).includes(name)) : events
        })
    };

    const setLoading = () => dispatch({type: SET_LOADING});

    return (
        <EventContext.Provider
            value={{
                events: state.events,
                loading: state.loading,
                getEvents,
            }}>
            {props.children}
        </EventContext.Provider>
    )
};

export default EventState;
