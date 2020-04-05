import React from 'react';
import '../styles/main.scss';

const EventDetails = (props) => {

    const {details} = props;

    return <div className="event-details-container">
        <div>{details.name}</div>
        <div>{details.type}</div>
    </div>
};

export default EventDetails;