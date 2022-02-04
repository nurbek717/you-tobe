import React from 'react';
import './App.scss';
import {Context} from './Context/Anthencetion';

// Componet
import AuthenticatedApp from './AuthencetedApp'
import UnauthenticatedApp from './UnauthencetedApp'
//Pages


function App() {
	const { token } = React.useContext((Context));  

	if (token) {
				return <AuthenticatedApp/>
	}else{
			return <UnauthenticatedApp/>
			
	}
}

export default App;
