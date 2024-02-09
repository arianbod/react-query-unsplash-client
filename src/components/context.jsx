import React from 'react';
import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useGlobalContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	const firstTest = 'first';

	//States n Their Functions
	const [isDarkTheme, setIsDarkTheme] = useState(
		window.matchMedia
			? window.matchMedia('(prefers-color-scheme: dark)').matches
			: false
	);
	const ToggleDarkTheme = () => setIsDarkTheme(!isDarkTheme);
	// End of States n Their Functions
	const values = { ToggleDarkTheme, isDarkTheme };
	return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};
