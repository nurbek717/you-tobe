import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './profile.scss';
// img
import qungiroq from '../../Assets/img/qungiroq.svg';
import Baner from '../../Assets/img/bonaer.jpg';
import search from '../../Assets/img/search.svg';
function Profile() {
	const { id } = useParams();
	const [users, setUser] = React.useState({});
	const [user2, setUser2] = React.useState([]);
	const [profel, setProfel] = React.useState({});

  const [users3, setUser3] = React.useState({});

	React.useEffect(() => {
		fetch('https://reqres.in/api/users/' + id)
			.then((Response) => Response.json())
			.then((data) => setProfel(data?.data));
	}, [id]);

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const slice = data.slice(0, 1);
			if (slice.length > 0) {
				setUser(slice);
			}
		})();
	});

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const dataClise = data.slice(0, 4);
			if (dataClise?.length > 0) {
				setUser2([...dataClise]);
			}

		})();

    (async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const slice = data.slice(50, 56);
			if (slice.length > 0) {
				setUser3(slice);
			}
		})();

    
	});

	return (
		<div className='profel'>
			<div className='profel__box'>
				<img
					className='profel__banner'
					src={Baner}
					alt=''
					width={1386}
					height={280}
				/>
			</div>

			<section className='profel__user'>
				<ul className='profel__item'>
					<li className='profel__list'>
						<img
							className='profel__img'
							src={profel.avatar}
							alt=''
							width={60}
							height={60}
						/>
						<h3 className='profel__heasding'>
							{profel.first_name + ' ' + profel.last_name}
						</h3>
					</li>
					<li className='profel__list'>
						<img src={qungiroq} alt='' width={22} height={26} />
						<button className='profel__btn'>Subscribe 2.3m</button>
					</li>
				</ul>
			</section>

			<section className='profel__peges'>
				<ul className='profel__peges--item'>
					<li className=''>
						<NavLink
							className={({ isAcrive }) =>
								'hero__home ' + (isAcrive ? 'active' : '')
							}
							to={''}>
							Home
						</NavLink>
					</li>
					<li className='profel__peges--list'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__home ' + (isAcrive ? 'active' : '')
							}
							to={''}>
							Videos
						</NavLink>
					</li>
					<li className='profel__peges--list'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__home ' + (isAcrive ? 'active' : '')
							}
							to={''}>
							Playlists
						</NavLink>
					</li>
					<li className='profel__peges--list'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__home ' + (isAcrive ? 'active' : '')
							}
							to={''}>
							Channels
						</NavLink>
					</li>
					<li className='profel__peges--list'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__home ' + (isAcrive ? 'active' : '')
							}
							to={''}>
							Discussion
						</NavLink>
					</li>
					<li className='profel__peges--list'>
						<NavLink
							className={({ isAcrive }) =>
								'hero__home ' + (isAcrive ? 'active' : '')
							}
							to={''}>
							About
						</NavLink>
					</li>
					<li className='profel__peges--list'>
						<img src={search} alt='' />
					</li>

					
				</ul>
        <div className='profel__peges--bag'>
						<p className='profel__page--text'>Recommended channel</p>
					</div>
			</section>
			{/* Audio */}
			<section className='audio'>
				<ul className='audio__item'>
					{users.length > 0 &&
						users.map((user) => (
							<li className='audio__list'>
								<img
									className='audio__img'
									src={user.url}
									alt=''
									width={500}
									height={250}
								/>
								<div className='audio__box'>
									<h4 className='audio__heading'>{user.title}</h4>
									<p className='aoudio__text'>
										Your cheap internet-based banner advertising will
										become one of the sought for ads there are. Today,
										the world of Internet advertising is rapidly
										evolving beyond banner ads and intrusive pop-ups.
										Bayles A common medium for advertising on the
										Internet is the use of banner ads.{' '}
									</p>
									<p className='aoudio__text1'>
										11k views · 6 months ago
									</p>
								</div>
							</li>
						))}

					<ul className='sasas'>
						{user2.length > 0 &&
							user2.map((user) => (
								<li key={user.id} className='listsasa'>
									<NavLink
										className={'Subscriptions__list'}
										to={'/peges/' + user.id}>
										<img
											className='Subscriptions__img'
											src={user.url}
											alt=''
											width={35}
											height={35}
										/>
										<p className='Subscriptions__text'>
                    Flora Benson
										</p>
									</NavLink>
								</li>
							))}
					</ul>

					<li className='audio__users'>
						<p></p>
					</li>
				</ul>
			</section>

      {/* vedio */}
      <section className='vedio'>
         <h4>Margaret Phelps videos</h4>
         <ul className='home__item home__item2'>
						{users3.length > 0 &&
							users3.map((user) => (
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
	);
}
export default Profile;
