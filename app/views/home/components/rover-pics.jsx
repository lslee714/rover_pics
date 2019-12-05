import React from 'react';
import { Row, Col } from 'react-bootstrap';

import Nav from './nav';
import CamSelect from './cam-select';
import  RoverSelect from './rover-select';
import SolInput from './sol-input';

class App extends React.Component {
    render() {
        return (
        <>
        <Nav/>
        <Row>
            <Col sm={5}>
                <RoverSelect/>
            </Col>
            <Col sm={5}>
                <CamSelect/>
            </Col>
            <Col sm={2}>
                <SolInput/>
            </Col>
        </Row>
        </>
        );
    }
}

export default App;