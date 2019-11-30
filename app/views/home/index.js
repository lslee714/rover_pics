import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './components/nav';
import RoverSelect  from './components/rover-select';

import '../stylesheets/home/home.scss';

ReactDOM.render(<Nav />, document.getElementById('navbar'));
ReactDOM.render(<RoverSelect />, document.getElementById('rovers'));