import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import './photos.scss';

// img
import Like from '../../Assets/img/lake.svg';
import Dethlake from '../../Assets/img/deth-lake.svg';
import Fill from '../../Assets/img/Fill.svg';
import More from '../../Assets/img/More.svg';
import konob from '../../Assets/img/knob.svg'
import food from '../../Assets/img/Food-Drink.svg';
function Photos() {
	const { id } = useParams();
	const [profel, setProfel] = React.useState({});
	const [users3, setUser3] = React.useState({});

	React.useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/photos/' + id)
			.then((Response) => Response.json())
			.then((data) => setProfel(data));
	}, [id]);

	React.useEffect(() => {
		(async () => {
			const response = await fetch(
				'https://jsonplaceholder.typicode.com/photos',
			);
			const data = await response.json();
			const slice = data.slice(10, 16);
			if (slice.length > 0) {
				setUser3(slice);
			}
		})();
	});
	return (
		<>
			<div className='photos'>
				<div className='photos__box'>
					<img
						className='photos__img'
						src={profel.url}
						alt=''
						width={1100}
						height={700}
					/>
					<h4 className='photos__heading'>{profel.title}</h4>
					<ul className='photos__item'>
						<li className='photos__list'>
							<p className='photos__text'>123k views</p>
						</li>
						<li className='photos__list'>
							<button className='photos__btn'>
								<img src={Like} alt='' width={14} height={13} />
								<span className='photos__span'>123k</span>
							</button>
							<button className='photos__btn'>
								<img src={Dethlake} alt='' width={14} height={13} />
								<span className='photos__span'>435k</span>
							</button>
							<button className='photos__btn'>
								<img src={Fill} alt='' width={14} height={13} />
								<span className='photos__span'>Share</span>
							</button>
							<button className='photos__btn bt2'>
								<img src={More} alt='' width={28} height={3} />
							</button>
						</li>
					</ul>
				</div>

				<section className='photos-user'>
					<ul className='photos-user__item'>
						<li className='photos-user__list'>
							<img src={food} alt='' />
						</li>
						<li className='photos-user__list'>
							<h3 className='photos-user__heading'>Food & Drink</h3>
							<p className='photos-user__text'>
								Published on 14 Jun 2019
							</p>

							<p className='photos-user__text2'>
								A successful marketing plan relies heavily on the
								pulling-power of advertising copy. Writing
								result-oriented ad copy is difficult, as it must appeal
								to, entice, and convince consumers to take action. There
								is no magic formula to write perfect ad copy; it is
								based on a number of factors, including ad placement,
								demographic, even the consumer’s mood when they see your
								ad.{' '}
							</p>
						</li>
						<li className='photos-user__list'>
							<button className='profel__btn  photo__btn'>Subscribe</button>
						</li>
					</ul>
				</section>
			</div>

			{/* PHOTOS API */}
			<div className='photos-api'>
				<div className='photos-api__box'>
          <h3 className='photos-api__heading1'>Next </h3>
					<div className='photos-api__box2'>
					<p className='photos-api__text1'>Autoplay</p>
				  <img src={konob} alt="" />
					</div>
				</div>
				<ul className='photos-api__item'>
					{users3.length > 0 && users3.map((user) => (
						<li className='photos-api__list'>

							<NavLink to={'/photos/' + user.id}>
								  <img className='photos-api__img' src= {user.thumbnailUrl} alt="" width={200} height={100} />  
							</NavLink>
              
								<h4 className='photos-api__heading'>{user.title}</h4>
								<p className='photos-api__text'>123k views</p>
					</li> 
					)
					
						)}
					</ul>
			</div>
		</>
	);
}

export default Photos;
