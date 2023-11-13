import * as React from 'react';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import MainStack from './src/navigators'
import TabStack from './src/navigators/Tab'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    white: 'white',
    purple: '#663399',
    ripple: 'rgba(255, 255, 255, 0.5)',
    darkRipple: 'rgba(0, 0, 0, 0.5)'
  },
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
          <MainStack />
      </PaperProvider>
    </SafeAreaProvider>
  ) 
}
