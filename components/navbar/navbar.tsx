import Link from 'next/link'
import IconButton from '../buttons/icon-button'

const Navbar = () => {
	return (
		<div className='w-full py-5 flex justify-around items-center'>
			<Link href={'/'}>
				<IconButton
					data={{
						imageUrl: '/cloud.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>

			<Link href={'/search'}>
				<IconButton
					data={{
						imageUrl: '/Magnifier.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>

			<Link href={'/favorites'}>
				<IconButton
					data={{
						imageUrl: '/save.svg',
						alt: 'profile',
						width: 32,
						height: 32,
					}}
				/>
			</Link>

			<Link href={'/favorites'}>
				<IconButton
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
