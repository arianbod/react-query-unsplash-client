import React, { useEffect } from 'react';
import { useGlobalContext } from './context';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
const ThemeToggle = () => {
	const { isDarkTheme, ToggleDarkTheme } = useGlobalContext();

	useEffect(() => {
		document.body.classList.toggle('dark-theme', isDarkTheme);
	}, [isDarkTheme]);
	return (
		<section className='toggle-container'>
			<button
				className='dark-toggle'
				onClick={ToggleDarkTheme}>
				{isDarkTheme ? (
					<BsFillMoonFill className='toggle-icon' />
				) : (
					<BsFillSunFill className='toggle-icon' />
				)}
			</button>
		</section>
	);
};

export default ThemeToggle;
