import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState('dog');
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		const storedTheme = localStorage.getItem('darkThemeStorage');
		return storedTheme !== null
			? JSON.parse(storedTheme)
			: window?.matchMedia('(prefers-color-scheme: dark)').matches;
	});

	useEffect(() => {
		localStorage.setItem('darkThemeStorage', isDarkTheme);
	}, [isDarkTheme]);

	const ToggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);

	const values = { ToggleDarkTheme, isDarkTheme, searchTerm, setSearchTerm };

	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
