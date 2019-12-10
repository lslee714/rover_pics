import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form }  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import CamSelect from './cam-select';
import  RoverSelect from './rover-select';
import SolInput from './sol-input';

export default class RoverForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false
		};
	}		

	handleSubmit(evt) {
		console.log(evt);
		const form = evt.currentTarget;
		console.log(form.checkValidity());
		evt.preventDefault();
	}

	render() {
			return (
			<>
			<Form
				noValidate
				onSubmit={this.handleSubmit.bind(this)}
				validated={this.state.validated.toString()}>
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
					<Row>
						<Col sm={{ span: 4, offset: 8}}>
							<Form.Group>
								<Button 
									className="float-right minor-right-margin" 
									type="submit"
									variant="primary">
									Submit
								</Button>
							</Form.Group>
						</Col>
					</Row>

			</Form>
			</>
			);
	}
}
