import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Album from './templates/MuiHPAlbumA1';


function App () {
	return (
		<div className = "App">
			<BrowserRouter>
				<Album />      
			</BrowserRouter>
    	</div>
	)
}


export default App;
