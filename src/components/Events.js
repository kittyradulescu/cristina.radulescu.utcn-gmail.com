import React from 'react';
import EventDetails from "./EventDetails";

const Events = (props) => {

    const {loading, events} = props;

    if (!loading) {
        return events && events.map((event) => {
            return <EventDetails key={event.id} details={event}/>
        });
    }

    return <div className="loader"> Loading Events... </div>

};

export default Events;