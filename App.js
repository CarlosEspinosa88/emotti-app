import * as React from 'react';
import {
  SafeAreaProvider,
  SafeAreaView
} from 'react-native-safe-area-context';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { darkTheme, lightTheme } from './src/theme'
import MainStack from './src/navigators'

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === 'dark' ? { ...darkTheme } : { ...lightTheme };
  
  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
          <MainStack />
      </PaperProvider>
    </SafeAreaProvider>
  ) 
}
