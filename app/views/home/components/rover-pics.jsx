import React from 'react';

import Nav from './nav';
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
                <h1>Hi</h1>
            </Col>
        </Row>
        </>
        )
    }
}

export default App;