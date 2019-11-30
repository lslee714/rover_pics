import React from 'react';

import { Form } from 'react-bootstrap';


export class CamSelect extends React.Component {
  constructor(...args) {
    super(...args);
  }

  handleCamSelect(evt) {
    const selectOptions = evt.target.options;
    const selected = [];
    Array.prototype.forEach.call(selectOptions, (option) => {
      if (option.selected) {
        selected.push(option.value);
      }
    });
  }

  render() {
    return (
      <>
        <Form>
            <Form.Group controlId='camSelect'>
                <Form.Label>Pick camera(s)</Form.Label>
                <Form.Control as="select" multiple onChange={this.handleCamSelect.bind(this)}>
                </Form.Control>
            </Form.Group>
        </Form>
      </>
    );
  }
}
