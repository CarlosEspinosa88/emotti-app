import * as React from 'react';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import MainStack from './src/navigators'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'yellow',
    white: 'white',
    purple: '#663399',
    ripple: 'rgba(255, 255, 255, 0.5)'
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <MainStack />
    </PaperProvider>

  ) 
}
