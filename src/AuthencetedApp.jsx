import React from 'react';
import { Routes, Route} from 'react-router-dom';
import { Context } from './Context/Theme';
// Componet
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

//Pages
import Home from './Page/Home/Home'
import Profil from './Page/Profile/Profile'

function AuthenticatedApp() {
	const { theme } = React.useContext(Context);
	 return <div className='container'>
		  <Header/>
     
				
				<main className={theme === 'light' ? 'light' : 'dark'} >
				<Footer />
						<Routes>
							<Route path='/home' element={<Home/>}/>
							<Route path='/peges/:id' element={<Profil/>}/>
						</Routes>
					</main>
					
		</div>
}

export default AuthenticatedApp;
