import Image from 'next/image'
import { ImageIcon } from '../interfaces/image-icon'

type Props = {
	data: ImageIcon
}

const ImageIcon = ({ data }: Props) => {
	return (
		<Image
			src={data.imageUrl}
			alt={data.alt}
			width={data.width}
			height={data.height}
		/>
	)
}

export default ImageIcon
