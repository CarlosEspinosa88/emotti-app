import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper';
import { ImageOne } from '../images'
import Button from '../components/Button'

function SlideOne({ navigation }) {
  const theme = useTheme()

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
        <Button
          title='NO'
          mode="contained"
          icon="thumb-down-outline"
          testID='primary-button-no'
          style={styles.buttonTwo}
          textColor={theme.colors.purple}
          onPress={() => {
            navigation.navigate('SlideTwo', {
              values: { atormentado: false }
            })
          }}
        />
        <Button
          title='SI'
          mode="contained"
          icon="thumb-up-outline"
          testID='primary-button-yes'
          style={styles.buttonOne}
          textColor={theme.colors.white}
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
    width: '40%',
    borderRadius: 50,
    backgroundColor: '#663399',
    padding: 5,
  },
  buttonTwo: {
    width: '40%',
    borderRadius: 50,
    backgroundColor: '#d9c8ff',
    padding: 5,
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

export default SlideOne
