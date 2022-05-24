export type ImageIcon = {
	imageUrl: string
	alt: string
	width: number
	height: number
}

export interface IdayItem {
	icon: string
	date: string
	condition: string
	avgTemp: number
}

// Esta interfaz guarda los datos del clima que se deben mostrar por cada dia
export interface Forecast {
	forecastday: {
		date: string
		day: {
			avgtemp_c: number
			avgtemp_f: number
		}
		condition: {
			text: string
			icon: string
			code: number
		}
	}
}

export interface IweatherInfo {
	locationName: string
	datetime: string
	tempCelsius: number
	tempFahrenheit: number
	conditions: string
	humidity: number
	country: string
}
