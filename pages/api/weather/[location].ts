import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'



const lookinForWeatherInfo = async (location: string) => {
	const options = {
		method: 'GET',
		url: 'https://weatherapi-com.p.rapidapi.com/search.json',
		params: { q: location },
		headers: {
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
			'X-RapidAPI-Key': '2c21dcaff8msh3db50dea80459f2p137cb4jsnf3a6b38994c0',
		},
	}
	 
	let weatherData = await axios
		.request(options)
		.then(function (response) {
			return response.data
		})
		.catch(function (error) {
			console.error(error)
		})

	return weatherData
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		console.log('post')
	} else if (req.method === 'GET') {
		const { location } = req.query

		res.status(200).json({
			descprition: 'wheater location information',
			data: lookinForWeatherInfo(location.toString()),
		})
	} else {
		res.status(200).json({ method: 'no hay manejador para este codigo' })
	}
}
