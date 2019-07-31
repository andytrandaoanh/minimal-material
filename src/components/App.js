import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AppBarInteraction from './drawers/CookBookC51';


function App () {
	return (
		<div className = "App">
			<BrowserRouter>
				<AppBarInteraction />      
			</BrowserRouter>
    	</div>
	)
}


export default App;
