const WeatherCard = () => {
	return (
		<div className='w-full flex justify-around items-center'>
			<div>
				<p className='font-semibold'>Sonsonate</p>
				<p className='text-7xl font-semibold'>32 C</p>
				<p className='font-semibold'>Sabado 31 mayo</p>
			</div>

			<div>
				<p className='rotate-90 font-semibold'>Nublado</p>
			</div>
		</div>
	)
}

export default WeatherCard
