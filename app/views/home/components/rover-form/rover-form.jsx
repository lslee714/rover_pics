import React from 'react';
import { Row, Col } from 'react-bootstrap';

import CamSelect from './cam-select';
import  RoverSelect from './rover-select';
import SolInput from './sol-input';
import Form from 'react-bootstrap/FormGroup';

export default class RoverForm extends React.Component {
    render() {
        return (
        <>
        <Form>
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
        </Form>
        </>
        );
    }
}
