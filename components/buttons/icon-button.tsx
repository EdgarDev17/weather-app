import Image from 'next/image'
import { ImageIcon } from '../../interfaces'

type Props = {
	data: ImageIcon
}

const IconButton = ({ data }: Props) => {
	return (
		<Image
			src={data.imageUrl}
			alt={data.alt}
			width={data.width}
			height={data.height}
		/>
	)
}

export default IconButton
