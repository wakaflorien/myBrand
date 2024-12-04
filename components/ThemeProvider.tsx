import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Theme, ThemeContextType } from '../App.types';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

// Theme provider implementation
export const DynamicThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    setTheme(savedTheme || 'light');
  }, []);

  useEffect(() => {
    if (theme !== null) {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  if (theme === null || theme === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use the theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
