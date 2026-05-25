import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'dark' | 'light';

export interface AppContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  isEnergySaving: boolean;
  setIsEnergySaving: (enabled: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    try {
      return (localStorage.getItem('haydi-theme') as ThemeMode) || 'dark';
    } catch {
      return 'dark';
    }
  });
  const [isEnergySaving, setIsEnergySavingState] = useState<boolean>(() => {
    try {
      return localStorage.getItem('haydi-energy-saving') === 'true';
    } catch {
      return false;
    }
  });

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('haydi-theme', newTheme);
    } catch (e) {
      console.warn('Storage failed', e);
    }
  };

  const setIsEnergySaving = (enabled: boolean) => {
    setIsEnergySavingState(enabled);
    try {
      localStorage.setItem('haydi-energy-saving', enabled ? 'true' : 'false');
    } catch (e) {
      console.warn('Storage failed', e);
    }
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-mode');
      root.classList.remove('dark-mode');
    } else {
      root.classList.add('dark-mode');
      root.classList.remove('light-mode');
    }
  }, [theme]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isEnergySaving) {
      root.classList.add('eco-mode');
    } else {
      root.classList.remove('eco-mode');
    }
  }, [isEnergySaving]);


  return (
    <AppContext.Provider value={{ theme, setTheme, isEnergySaving, setIsEnergySaving }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
