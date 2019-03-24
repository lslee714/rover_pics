import React from 'react';

import {Button, Form} from 'react-bootstrap';


class RoverForm extends React.Component {
    constructor(...args){
        super(...args);
        this.selectedRovers = [];
        this.availableCams = [];
    }
    updateCameras(){
        let cams = [
            {
                abbr:'FHAZ', 
                description:'Front Hazard Avoidance Camera'
            },
            {
                abbr: 'RHAZ',
                description: 'Rear Hazard Avoidance Camera'
            },
            {
                abbr: 'NAVCAM',
                description: 'Navigation Camera'
            }
        ]
        
    }
    handleRoverSelect(evt){
        let selectOptions = evt.target.options;
        let selected = [];
        Array.prototype.forEach.call(selectOptions, option=>{
            if(option.selected){
                selected.push(option);
            }
        });
        //clear out the prior selected
        this.selectedRovers = [];
        this.selectedRovers = selected;
        this.updateCameras();
    }
    render (){
        return (
        <>
            <Form>
                <Form.Group controlId='roverSelect'>
                    <Form.Label>Pick rover(s)</Form.Label>
                    <Form.Control as="select" multiple onChange={this.handleRoverSelect.bind(this)}>
                        <option value='curiosity'>Curiosity</option>
                        <option value='opportunity'>Opportunity</option>
                        <option value='spirit'>Spirit</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        </>
        )
    }
};

export default RoverForm;