import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

// Import user components
import Welcome from '../components/home/Welcome';
import HowTo from '../components/home/HowTo';

/**
 * Render the Map container
 */

class MapContainer extends React.Components {
	render() {
		if (!this.props.loaded) {
			return <div>Loading... </div>
		}
		return (
			<div>Map will go here</div>
		)
	}
}

export default GoogleApiComonent({
	apiKey: __GAPI_KEY__
})(Container)