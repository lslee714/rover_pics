import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

class ImageViewer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			url: ''
		};
	}
	componentDidUpdate(prevProps) {
		//First time urls were loaded in, immediately set url
		if(!prevProps.urls.length && this.props.urls.length) {
			this.setUrl();
		}
	}

	componentDidMount() {
		this.interval = setInterval(() => {
			if(this.props.urls.length) {
				this.setUrl();
			}
		}, 10000);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	setUrl() {
		this.setState({url: this.props.urls[Math.floor(Math.random()*this.props.urls.length)]});
	}

	render() {
		if(this.state.url) {
			return (
				<>
					<div className="image-viewer">
						<img className="rover-pic" src={this.state.url}/>
					</div>
				</>
			);
		}
 else return (<></>);
		
	}
}

ImageViewer.propTypes = {
	urls: PropTypes.arrayOf(PropTypes.string)
};

export default connect(state => {
	return {urls : state.pics.urls || []};
})(ImageViewer);