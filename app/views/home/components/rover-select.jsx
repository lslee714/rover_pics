import React from 'react';

import { Form } from 'react-bootstrap';

import { AvailableRoverCams } from '../../../helpers/available-rover-cams';


export class RoverSelect extends React.Component {
  constructor(...args) {
    super(...args);
    this.availableRovers = new AvailableRoverCams();
    this.availableCams = [];
  }

  handleRoverSelect(evt) {
    const selectOptions = evt.target.options;
    const selected = [];
    Array.prototype.forEach.call(selectOptions, (option) => {
      if (option.selected) {
        selected.push(option.value);
      }
    });
    const allCams = [];
    selected.forEach((roverId) => {
      allCams.push(...this.availableRovers.getRoverCams(roverId))
    });
    this.availableCams = allCams.filter((cam, index, arr) => arr.indexOf(cam) === index);
  }

  render() {
    return (
      <>
        <Form>
            <Form.Group controlId='roverSelect'>
                <Form.Label>Pick rover(s)</Form.Label>
                <Form.Control as="select" multiple onChange={this.handleRoverSelect.bind(this)}>
                    {this.availableRovers.getRovers().map((rover) => {
                      return <option key={rover.id} value={rover.id}>{rover.name}</option>
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
      </>
    );
  }
}
