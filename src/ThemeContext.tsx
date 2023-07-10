import React, { createContext, useState, useEffect } from 'react';

interface ThemeContextProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isDarkMode: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <div className={isDarkMode ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};
