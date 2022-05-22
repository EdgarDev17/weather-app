/**
 * codigo para imagen de fondo bg-[url("/sunny.webp")] bg-center
*/

import type { NextPage } from 'next'
import Navbar from '../components/navbar/navbar'
import WeatherCard from '../components/weater-card'

const Home: NextPage = () => {
	return (
		<div className='w-full h-screen'>
			<div className='container w-full'>
				<div className='pt-10'>
					<WeatherCard />
				</div>
				
				<Navbar/>
			</div>
		</div>
	)
}

export default Home
