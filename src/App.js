import React from 'react';
import logo from './logo.svg';
import './App.css';
import igv from 'igv';

class App extends React.Component {
    componentDidMount() {
	var igvContainer = document.getElementById('igv-div');
	igv.xhr.loadJson("https://www.dropbox.com/s/sd1t7tr1kh9gzlw/igvSessiontest.json?dl=0")
	    .then(function(json) {
		return igv.createBrowser(igvContainer, json);
	    }
		 );
    }
    render() {
	return (
		<div id="igv-div" style={{width: '100%', height: '100%'}}></div>
	);
    }
}

export default App;
