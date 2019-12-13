import React from 'react';

import ImageViewer from './image-viewer';
import Nav from './nav';
import RoverForm from './rover-form/rover-form';

class App extends React.Component {
    render() {
        return (
        <>
            <Nav/>
            <RoverForm/>
            <ImageViewer/>
        </>
        );
    }
}

export default App;