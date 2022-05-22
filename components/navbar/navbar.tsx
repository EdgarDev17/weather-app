import ImageIcon from '../image-icon'
import Link from 'next/link'

const Navbar = () => {
	return (
		<div className='w-full py-5 flex justify-around items-center'>
			<Link href={'/'}>
				<ImageIcon
					data={{
						imageUrl: '/cloud.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>

			<Link href={'/search'}>
				<ImageIcon
					data={{
						imageUrl: '/Magnifier.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>

			<Link href={'/favorites'}>
				<ImageIcon
					data={{
						imageUrl: '/save.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>

			<Link href={'/favorites'}>
				<ImageIcon
					data={{
						imageUrl: '/account.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>
		</div>
	)
}

export default Navbar
