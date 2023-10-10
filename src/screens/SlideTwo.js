import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { ImageTwo } from '../images'
import Button from '../components/Button'

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
        <Button
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
        <Button
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
  labelContainer: {
    justifyContent: 'center',
    alignItems: 'center',
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
  colorButtonTwo: {
    color: '#663399'
  },
  image: {
    width: 320,
    height: 350,
    borderRadius: 18,
  },
});

export default SlideTwo
