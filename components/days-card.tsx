import DayItem from './day-item'
import useWeatherDays from '../hooks/useWeatherDays'

// this componen render the week days with weather info
const Forecast = () => {
	const { daysWeather } = useWeatherDays('Sonsonate')

	console.log('Forecast Component 👇🏼');
	console.log(daysWeather);
	
	// TODO: crear un componente que muestre cada dia por individual 🥲
	return <h1>Forecast</h1>
	// return <DayItem data={}>days-card</DayItem>
}

export default Forecast
