import React from 'react';
import PropTypes from 'prop-types';
import { ChatContainer } from "../components/ChatContainer";

type AppProps = { }

const Home = (props: AppProps) => {
    return (
        <div className="home-page">
            <ChatContainer/>
        </div>
    );
};

Home.propTypes = {

};

export default Home;
