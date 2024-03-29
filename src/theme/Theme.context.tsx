import React from 'react';
import {Theme} from './theme.interface';
import {
  DEFAULT_LIGHT_THEME,
  DEFAULT_LIGHT_THEME_ID,
} from './DefaultLight.theme';
import {DEFAULT_DARK_THEME, DEFAULT_DARK_THEME_ID} from './DefaultDark.theme';

interface ProvidedValue {
  theme: Theme;
  toggleTheme: () => void;
}
const Context = React.createContext<ProvidedValue>({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not registered');
  },
});

interface Props {
  initial: Theme;
  children?: React.ReactNode;
}

export const ThemeProvider = React.memo<Props>(props => {
  const [theme, setTheme] = React.useState<Theme>(props.initial);

  const ToggleThemeCallback = React.useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme.id === DEFAULT_LIGHT_THEME_ID) {
        return DEFAULT_DARK_THEME;
      }
      if (currentTheme.id === DEFAULT_DARK_THEME_ID) {
        return DEFAULT_LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedValue = React.useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);

  return (
    <Context.Provider value={MemoizedValue}>{props.children}</Context.Provider>
  );
});
export const useTheme = () => React.useContext(Context);
