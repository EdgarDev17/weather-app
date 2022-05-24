import { useEffect, useState } from 'react'
import axios from 'axios'
import { Forecast } from '../interfaces'

const useWeatherDays = (query: string) => {
	const [daysWeather, setDaysWeather] = useState({} as Forecast[])

	//👇🏼 API
	useEffect(() => {
		const options = {
			method: 'GET',
			url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
			params: { q: query, days: '7' },
			headers: {
				'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
				'X-RapidAPI-Key':
					'2c21dcaff8msh3db50dea80459f2p137cb4jsnf3a6b38994c0',
			},
		}

		axios
			.request(options)
			.then((response) => {
				let dayData: Forecast[] = response.data.forecast.forecastday
				setDaysWeather(dayData)
			})
			.catch(function (error) {
				console.error(error)
			})
	}, [query])
    return{
        daysWeather
    }
}

export default useWeatherDays
