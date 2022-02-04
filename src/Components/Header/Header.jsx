import React from 'react';
import './Header.scss';

// Componet
import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/Theme';
  

// img
import Youtobe from '../../Assets/img/youtobe-logo.svg';
import Vedio from '../../Assets/img/vedio.svg';
import Combined from '../../Assets/img/Combined.svg';
import Qungiroq from '../../Assets/img/qungiroq.svg';
import Userpic from '../../Assets/img/Userpic.svg';


function Header() {
	const { theme, setTheme } = React.useContext(Context);
	return (
		<header className={theme === 'light' ? 'light' : 'dark'}>
			<div className='header'>
				<div className='header__bag'>
			
					
						<NavLink  to={'/home'}>
							<img className='you-tobe' src={Youtobe} alt='' width={116} height={25} />
						</NavLink>
			
				</div>

				<ul className='header__item'>
					<li>
						<form>
							<input
								className='header__input'
								type='text'
								placeholder='Search'
							/>
						</form>
					</li>
					<li className='header__list  qushicha'>
						{/* kun tun */}
						<select
							className='header__select'
							value={theme}
							onChange={(evt) => setTheme(evt.target.value)}>
							<option value='light'>Kun</option>
							<option value='dark'>Tun</option>
						</select>

						
							<img src={Vedio} alt='' width={27} height={20} />
						  <img src={Combined} alt='' width={21} height={21} />
						  <img src={Qungiroq} alt='' width={22} height={26} />
						  <img src={Userpic} alt='' width={40} height={40} />
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
