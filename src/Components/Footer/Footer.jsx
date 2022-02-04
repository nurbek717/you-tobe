import React from 'react';
import './Footer.scss';

import { NavLink } from 'react-router-dom';
import { Context } from '../../Context/Theme';

//img
import Hampurger from '../../Assets/img/Shape.svg';
import HomeLogo from '../../Assets/img/ui-71.svg';
import Trending from '../../Assets/img/ui-01.svg';
import Subscriptions from '../../Assets/img/ui-45.svg';
import Library from '../../Assets/img/documents-11.svg';
import History from '../../Assets/img/others-07.svg';
import Watchlater from '../../Assets/img/tech-25.svg';
import Favourites from '../../Assets/img/ui-02.svg';
import Likedvideos from '../../Assets/img/ui-03.svg';
import Music from '../../Assets/img/ui-80.svg';
import Games from '../../Assets/img/tech-02.svg';
import setting from '../../Assets/img/ui-46.svg';

function Footer() {
	const headingRef = React.useRef(null);

	const [user, setUser] = React.useState({});
	const { theme  } = React.useContext(Context);
	React.useEffect(() => {
		fetch('https://reqres.in/api/users')
			.then((response) => response.json())
			.then((data) => setUser(data?.data));
	});
	return (
		<footer className={theme === 'light' ? 'light' : 'dark'}>
			<button
				className='header__btn'
				onClick={() => {
					headingRef.current.classList.toggle('hamburger--acrive');
				}}>
				<img src={Hampurger} alt='' width={20} height={17} />
			</button>
			<section ref={headingRef} className='hero hamburger--acrive'>
				<nav className='nav'>
					<ul className='hero__item'>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/home'>
								<img src={HomeLogo} alt='' height={20} width={19} />
								<span> Home</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/Trending'>
								<img src={Trending} alt='' height={20} width={19} />
								<span> Trending</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/peges'>
								<img
									src={Subscriptions}
									alt=''
									height={20}
									width={19}
								/>
								<span> Subscriptions</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={Library} alt='' height={20} width={19} />
								<span> Library</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={History} alt='' height={20} width={19} />
								<span> History</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={Watchlater} alt='' height={20} width={19} />
								<span> Watchlater</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={Favourites} alt='' height={20} width={19} />
								<span> Favourites</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={Likedvideos} alt='' height={20} width={19} />
								<span> Likedvideos</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={Music} alt='' height={20} width={19} />
								<span> Music</span>
							</NavLink>
						</li>
						<li className='hero__list'>
							<NavLink
								className={({ isAcrive }) =>
									'hero__link ' + (isAcrive ? 'active' : '')
								}
								to='/'>
								<img src={Games} alt='' height={20} width={19} />
								<span> Games</span>
							</NavLink>
						</li>
						<li></li>
					</ul>
				</nav>
				{/* pege */}
				<ul className='pege'>
					<li className='hero__list   page--lis'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__link ' + (isAcrive ? 'active' : '')
							}
							to='/'>
							<img src={HomeLogo} alt='' height={40} width={39} />
							<span className='hero__span'> Home</span>
						</NavLink>
					</li>
					<li className='hero__list page--lis'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__link ' + (isAcrive ? 'active' : '')
							}
							to='/'>
							<img src={Trending} alt='' height={40} width={39} />
							<span className='hero__span'> Trending</span>
						</NavLink>
					</li>
					<li className='hero__list page--lis'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__link ' + (isAcrive ? 'active' : '')
							}
							to='/'>
							<img src={Subscriptions} alt='' height={35} width={35} />
							<span className='hero__span'> Subscriptions</span>
						</NavLink>
					</li>
				</ul>

				{/* Subscriptions */}

				<section className='Subscriptions'>
					<h2 className='Subscriptions__heading'> Subscriptions</h2>

					<ul className='Subscriptions__item'>
						{user.length > 0 &&
							user.map((user) => (
								<li key={user.id} className='Subscriptions__list'>
									<NavLink
										className={'Subscriptions__list'}
										to={'/peges/' + user.id}>
										<img
											className='Subscriptions__img'
											src={user.avatar}
											alt=''
											width={35}
											height={35}
										/>
										<p className='Subscriptions__text'>
											{user.first_name + ' ' + user.last_name}
										</p>
									</NavLink>
								</li>
							))}
					</ul>
				</section>

				<section className='seting'>
					<div className='seting__box'>
						<img src={setting} alt='' />
						<p className='Subscriptions__text'>Setting</p>
					</div>
				</section>
			</section>

			{/* <Rasim/>   */}
		</footer>
	);
}

export default Footer;
