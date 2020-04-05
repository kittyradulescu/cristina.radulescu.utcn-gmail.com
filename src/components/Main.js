import React, {useContext, useEffect, useState} from 'react';
import '../styles/main.scss';
import Events from './Events';
import Footer from "./Footer";
import SearchBar from "./SearchBar";
import EventContext from "../context/events/context";

const Main = () => {

    const {events, loading, getEvents} = useContext(EventContext);
    const [filteredEvents, setFilteredEvents] = useState(events);

    useEffect(() => {
        getEvents();
    }, []);

    useEffect(() => {
        setFilteredEvents(events);
    }, [events]);

    const filterValue = (value) => {
        setFilteredEvents(events.filter((item) => item.name.includes(value)));
    };

    return (
        <div className="main-container">
            <div className="main-events-section">
                <SearchBar filterValue={filterValue}/>
                <div className="events-container">
                    <Events events={filteredEvents} loading={loading}/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Main;