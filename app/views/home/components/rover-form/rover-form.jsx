import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Form }  from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

import CamSelect from './cam-select';
import  RoverSelect from './rover-select';

export default class RoverForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			validated: false
		};
		this.formRef = React.createRef();
	}		

	checkValidity() {
		const isValid = this.formRef.current.checkValidity();
		this.setState({validated: isValid});
	}	

	handleOnChange() {
		this.checkValidity();
	}

	handleSubmit(evt) {
		evt.preventDefault();
		if(this.state.validated) {
			console.log("Fire action to get stuff!");
		}
	}

	render() {
			return (
			<>
			<Form
				ref={this.formRef}
				noValidate
				onSubmit={this.handleSubmit.bind(this)}
				validated={this.state.validated.toString()}>
					<Row>
							<Col sm={6}>
									<RoverSelect onChange={this.handleOnChange.bind(this)}/>
							</Col>
							<Col sm={6}>
									<CamSelect onChange={this.handleOnChange.bind(this)}/> 
							</Col>
					</Row>
					<Row>
						<Col sm={{ span: 4, offset: 8}}>
							<Form.Group>
								<Button 
									className="float-right minor-right-margin" 
									type="submit"
									variant="primary"
									disabled = {!this.state.validated}
								>
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
