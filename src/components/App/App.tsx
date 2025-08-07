import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import classes from './App.module.scss'
import About from '@/pages/about/About'
import avatarPng from '@/assets/bird.png'
import avatarJpg from '@/assets/top-bg.jpeg'
import Calendar from '@/assets/logo.svg'

function TODO(a: number) {
	console.log('TODOFUNCTION')
}

export const App = () => {
	const [count, setCount] = useState(0) // Инициализация состояния с начальным значением 0

	const increment = () => setCount(prevCount => prevCount + 1)
	// TODO(12313);

	// if(__PLATFORM__ === 'desktop') {
	// 	return <div>ISDESKTOPPLATFORM</div>
	// }

	// if(__PLATFORM__ === 'mobile') {
	// 	return <div>ISMOBILEPLATFORM</div>
	// }

	// if(__ENV__ === 'development') {
	// 	// addDevtools()
	// }

	return (
		<div data-testid={'App.DataTestId'}>
			<h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
			<div>
				<img src={avatarPng} alt="" />
				<img src={avatarJpg} alt="" />
				<div>
					<Calendar width={550} height={550} color={'green'} />
				</div>
			</div>
			<Link to={'/about'}>about</Link>
			<br />
			<Link to={'/shop'}>shop</Link>
			<h1 className={classes.value}>{count}</h1>
			<button className={classes.button} onClick={increment}>
				<span>Увеличить</span>
			</button>
			<About />
		</div>
	)
}

export default App
