import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DrawerSections from './drawers/CookBookC41';


function App () {
	return (
		<div className = "App">
			<BrowserRouter>
				<DrawerSections />      
			</BrowserRouter>
    	</div>
	)
}


export default App;
