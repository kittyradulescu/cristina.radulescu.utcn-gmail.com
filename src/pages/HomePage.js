import React from 'react';
import Header from "../components/Header";
import Main from "../components/Main";
import EventState from "../context/events/state";

const HomePage = () => {

    return <div>
        <Header/>

        <EventState>
            <Main/>
        </EventState>
    </div>

};

export default HomePage;
