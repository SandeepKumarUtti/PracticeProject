import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {store} from './src/state/store';
import RootNavigator from './src/navigators/RootNavigator';
import {ThemeProvider} from './src/theme/Theme.context';
import {DEFAULT_LIGHT_THEME} from './src/theme/DefaultLight.theme';
export const ThemeContext = React.createContext({});

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
        <Provider store={store}>
          <RootNavigator />
        </Provider>
      </ThemeProvider>
    </NativeBaseProvider>
  );
}

export default App;
