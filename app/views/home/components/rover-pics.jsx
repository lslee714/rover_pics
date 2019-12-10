import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Nav from './nav';
import RoverForm from './rover-form/rover-form';

class App extends React.Component {
    render() {
        return (
        <>
            <Nav/>
            <RoverForm/>
        </>
        );
    }
}

export default App;