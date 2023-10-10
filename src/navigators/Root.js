import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SlideOne from '../screens/SlideOne'
import SlideTwo from '../screens/SlideTwo'
import SlideThree from '../screens/SlideThree'
import SlideFour from '../screens/SlideFour'
import ResumeTest from '../screens/ResumeTest'

const Stack = createNativeStackNavigator();

function Root() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SlideOne">
        <Stack.Screen
          name="SlideOne"
          component={SlideOne}
          options={{
            animation: 'slide_from_righ',
            animationDuration: 350,
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SlideTwo"
          component={SlideTwo}
          options={{
            animation: 'slide_from_righ',
            animationDuration: 350,
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SlideThree"
          component={SlideThree}
          options={{
            animation: 'slide_from_righ',
            animationDuration: 350,
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SlideFour"
          component={SlideFour}
          options={{
            animation: 'slide_from_righ',
            animationDuration: 350,
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="ResumeTest"
          component={ResumeTest}
          options={{
            animation: 'slide_from_righ',
            animationDuration: 350,
            headerShown: false,
            gestureEnabled: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Root
