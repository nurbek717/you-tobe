import React from 'react';
// import { NavLink } from 'react-router-dom';
import './home.scss';

// img
import Oval from '../../Assets/img/Oval.svg';
import food from '../../Assets/img/Food-Drink.svg';
function Home() {
	const [users, setUser] = React.useState({});
	const [userName, setUserName] = React.useState({});

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const slice = data.slice(50, 56);
			if (slice.length > 0) {
				setUser(slice);
			}
		})();

		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const recommended = data.slice(20, 23);
			if (recommended.length > 0) {
				setUserName(recommended);
			}
		})();
	});

	return (
		<>
			<div className='home__page'>
				<div className='hero__box'>
					<img src={Oval} alt='' />
					<p className='home__text'>Dollie Blair</p>
				</div>
				<nav className='home__nav'>
					<ul className='home__item'>
						{users.length > 0 &&
							users.map((user) => (
								<li key={user.id} className='home__list'>
									<img className='home__img'
										src={user.thumbnailUrl}
										width={180}
										height={100}
									/>
									<h4 className='home__heading'>{user.title}</h4>
                           <p className='hero__text'>34k views  ·  5 months ago</p>
								</li>
							))}
					</ul>
				</nav>
            {/* Recommended */}
             <section className='recommended'>
            <h3 className='recommended__heading'>Recommended</h3>
             <ul className='recommended__item'>

                {
                   userName.length > 0 && userName.map((users) => (
                    <li className='recommended__list'>
                    <img className='recommended__img'
										src={users.url}
										width={500}
										height={250}
									/>
									<h4 className='recommended__heading'>{users.title}</h4>
                           <p className='hero__text'>34k views  ·  5 months ago</p>
                    </li>
            ))}
                
             </ul>
         </section>
         {/* doof */}

         <section className='food'>
           <div className='food__box'>
           <img src={food} alt="" />
            <h3 className='food__heading'>Food & Drink</h3>
            <p className='food__text'>Recommended channel for you</p>
           </div>
            <ul className='home__item'>
            {users.length > 0 &&
							users.map((user) => (
								<li key={user.id} className='home__list'>
									<img className='home__img'
										src={user.thumbnailUrl}
										width={180}
										height={100}
									/>
									<h4 className='home__heading'>{user.title}</h4>
                           <p className='hero__text'>34k views  ·  5 months ago</p>
								</li>
							))}
            </ul>
         </section>

			</div>

        
		</>
	);
}

export default Home;
