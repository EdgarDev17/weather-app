import { useState, useEffect } from 'react'
import axios from 'axios'
import { IweatherInfo } from '../interfaces'

const useWeather = (location: string) => {
	const [weatherInfo, setWeatherInfo] = useState<IweatherInfo>(
		{} as IweatherInfo
	)

	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/current.json',
			params: { q: location },
			headers: {
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
				'X-RapidAPI-Key':
					'2c21dcaff8msh3db50dea80459f2p137cb4jsnf3a6b38994c0',
			},
		}
		axios
			.request(options)
			.then(function (response) {
				const { location, current } = response.data

				let weatherData: IweatherInfo = {
					locationName: location.name,
					datetime: location.localtime,
					tempCelsius: current.temp_c,
					tempFahrenheit: current.temp_f,
					conditions: current.condition.text,
					humidity: current.humidity,
					country: location.country,
				}
				setWeatherInfo(weatherData)
			})
			.catch(function (error) {
				console.error(error)
			})
	}, [location])


	
	return { weatherInfo }
}

export default useWeather
