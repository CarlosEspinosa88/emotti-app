import * as React from 'react';
import { StyleSheet, Text, View, Button, ScrollView, FlatList, Image } from 'react-native';
import MainButton from './src/components/Button'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
const ImageOne =  require('./assets/images/item1.png'); 
const ImageTwo = require('./assets/images/item2.png');
const ImageThree = require('./assets/images/item3.png');
const ImageFour = require('./assets/images/item4.png');

function SlideOne({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imageContainerText}>
          <Image source={ImageOne} style={styles.image} />
          <View style={styles.labelContainer}>
            <Text style={styles.mainText}>Tos</Text>
          </View> 
        </View>  
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          title='NO'
          style={styles.buttonTwo}
          color={styles.colorButtonTwo}
          onPress={() => {
            navigation.navigate('SlideTwo', {
              values: { atormentado: false }
            })
          }}
        />
        <MainButton
          title='SI'
          style={styles.buttonOne}
          onPress={() => {
            navigation.navigate('SlideTwo', {
              values: { atormentado: true }
            })
          }} 
        />
      </View>
    </View>
  );
}

function SlideTwo({ route, navigation }) {
  const { values } = route?.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imageContainerText}>
          <Image source={ImageTwo} style={styles.image} />
          <View style={styles.labelContainer}>
            <Text style={styles.mainText}>Animado / Animada</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          title='NO'
          style={styles.buttonTwo}
          color={styles.colorButtonTwo}
          onPress={() => navigation.navigate('SlideThree', {
            values: {
              ...values,
              animado: false
            }
          })}
        />
        <MainButton
          title='SI'
          style={styles.buttonOne}
          onPress={() => navigation.navigate('SlideThree', {
            values: {
              ...values,
              animado: true
            }
          })}
        />
      </View>
    </View>
  );
}

function SlideThree({ route, navigation }) {
  const { values } = route?.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imageContainerText}>
          <Image source={ImageThree} style={styles.image} />
          <View style={styles.labelContainer}>
            <Text style={styles.mainText}>Entiesamiento</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          title='NO'
          style={styles.buttonTwo}
          color={styles.colorButtonTwo}
          onPress={() => navigation.navigate('SlideFour', {
            values: {
              ...values,
              entiesamiento: false
            }
          })}
        />
        <MainButton
          title='SI'
          style={styles.buttonOne}
          onPress={() => navigation.navigate('SlideFour', {
            values: {
              ...values,
              entiesamiento: true
            }
          })}
        />
      </View>
    </View>
  );
}

function SlideFour({ route, navigation }) {
  const { values } = route?.params;

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <View style={styles.imageContainerText}>
          <Image source={ImageFour} style={styles.image} sharedTransitionTag="tag" />
          <View style={styles.labelContainer}>
            <Text style={styles.mainText}>Atormentado / Artormentada</Text>
          </View> 
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <MainButton
          title='NO'
          style={styles.buttonTwo}
          color={styles.colorButtonTwo}
          onPress={() => navigation.navigate('ResumeTest', {
            values: {
              ...values,
              tos: false
            }
          })}
        />
        <MainButton
          title='SI'
          style={styles.buttonOne}
          onPress={() => navigation.navigate('ResumeTest', {
            values: {
              ...values,
              tos: true
            }
          })}
        />
      </View>
    </View>
  );
}

function ResumeTest({ route, navigation }) {
  const { values } = route?.params;
  const data = Object.entries(values)

  return (
      <View style={styles.mainContainer}>
        <View style={styles.resumeContainer}>
          <View style={styles.resumeText}>
            <Text style={[styles.mainText, styles.underlineText]}>
              Resumen del test
            </Text>
          </View>
          <View style={{ paddingTop: 50, paddingHorizontal: 20 }}>
            <FlatList
              ItemSeparatorComponent={
                Platform.OS !== 'android' &&
                (() => ( <View style={{ height: '1.2%', backgroundColor: '#9c9c9c', marginTop: 10 }} />))
              }
              data={data}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={{ marginBottom: 10}}>
                  <View style={{ flexDirection: 'row', paddingTop: 15 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' }}>{item[0]}: {' '}</Text>
                    <Text style={{ fontSize: 20 }}>{item[1] === true ? 'SI' : 'NO'}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
        <View style={styles.generalButtonContainer}>
          <MainButton
            title='Volver al test'
            style={styles.generalButton}
            onPress={() => navigation.navigate('SlideOne')}
          />
        </View>
      </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SlideOne"
      >
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
  );
}

const styles = StyleSheet.create({
  mainContainer: { 
    flex: 1,
    marginTop: 90,
    paddingHorizontal: 20
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
  resumeContainer: {
    flex: 0.9,
    backgroundColor: '#FFF',
    borderColor: '#663399',
    borderWidth: 2,
    borderRadius: 20
  },
  imageContainer: {
    flex: 0.7,
    borderColor: '#663399',
    borderWidth: 2,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginBottom: 20
  },
  imageContainerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  generalButtonContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  resumeText: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonOne: {
    borderRadius: 50,
    padding: 15,
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#663399'
  },
  buttonTwo: {
    borderRadius: 50,
    padding: 15,
    width: '40%',
    alignItems: 'center',
    backgroundColor: '#d9c8ff'
  },
  generalButton: {
    borderRadius: 50,
    padding: 15,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#663399'
  },
  colorButtonTwo: {
    color: '#663399'
  },
  image: {
    width: 320,
    height: 350,
    borderRadius: 18,
  },
});
