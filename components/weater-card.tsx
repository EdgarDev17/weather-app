import useWeather from '../hooks/useWeather'


const WeatherCard = () => {
	// custom hook for handling weather information
	const {weatherInfo} = useWeather('Nahuizalco')

	return (
		<div className='w-full flex justify-around items-center'>
			<div>
				<p className='font-semibold'>{weatherInfo.locationName}, {weatherInfo.country}</p>
				<p className='text-7xl font-semibold'>{weatherInfo.tempCelsius} C</p>
				<p className='font-semibold'>{weatherInfo.datetime}</p>
			</div>

			<div>
				<p className='rotate-90 font-semibold'>{weatherInfo.conditions}</p>
			</div>
		</div>
	)
}

export default WeatherCard
