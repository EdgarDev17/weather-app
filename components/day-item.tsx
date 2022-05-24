import { useState } from 'react'
import { IdayItem } from '../interfaces'

type Props = { 
	data: IdayItem
}

const DayItem = ({ data }: Props) => {
	return (
		<>
			<img src={data.icon} alt='weather icon' />
			<p>{data.condition}</p>
			<p>{data.date}</p>
			<p>{data.avgTemp}</p>
		</>
	)
}

export default DayItem
