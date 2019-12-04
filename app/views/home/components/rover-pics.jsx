import React from 'react';

import Nav from './nav';
import CamSelect from './cam-select';
import  RoverSelect from './rover-select';
import { Row, Col } from 'react-bootstrap';

class App extends React.Component {
    render() {
        return (
        <>
        <Nav/>
        <Row>
            <Col>
                <RoverSelect/>
            </Col>
            <Col>
                <CamSelect/>
            </Col>
        </Row>
        </>
        );
    }
}

export default App;