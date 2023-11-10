import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { useTheme } from 'react-native-paper';
import { ImageOne } from '../images'
import Button from '../components/Button'

function SlideOne({ navigation }) {
  const theme = useTheme()

  const mainBackground = StyleSheet.compose([
    styles.safeArea,
    { backgroundColor: theme.colors.purple }
  ])

  const imageContainer = StyleSheet.compose([
    styles.imageContainer,
    { 
      borderColor: theme.colors.darkRipple,
      backgroundColor: theme.colors.white,
    }
  ])

  return (
    <SafeAreaView style={mainBackground}>
      <View style={styles.mainContainer}>
        <View style={imageContainer}>
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
            labelStyle={styles.buttonLabel}
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
            labelStyle={styles.buttonLabel}
            textColor={theme.colors.purple}
            onPress={() => {
              navigation.navigate('SlideTwo', {
                values: { atormentado: true }
              })
            }} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    marginTop: 90,
    paddingHorizontal: 20,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  imageContainer: {
    flex: 0.7,
    borderWidth: 3,
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
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
        shadowColor: '#52006A',
      }
    })
  },
  buttonTwo: {
    width: '40%',
    borderRadius: 50,
    backgroundColor: '#d9c8ff',
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 8},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
        shadowColor: '#52006A',
      }
    })
  },
  image: {
    width: '100%',
    height: '75%',
    borderRadius: 18,
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default SlideOne
