import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { useTheme } from 'react-native-paper';
import { ImageThree } from '../images'
import Button from '../components/Button'

function SlideThree({ route, navigation }) {
  const theme = useTheme();
  const { values } = route?.params;

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
    <SafeAreaView style={[
      styles.safeArea,
      { backgroundColor: theme.colors.primary }
    ]}>
      <View style={styles.mainContainer}>
        <View style={[
          styles.imageContainer,
          { 
            borderColor: theme.colors.inversePrimary,
            backgroundColor: theme.colors.custom1,
          }
        ]}>
          <View style={styles.imageContainerText}>
            <Image source={ImageThree} style={styles.image} />
            <View style={styles.labelContainer}>
              <Text style={[
                styles.mainText,
                { color: theme.colors.custom0 }
              ]}>
                Entiesamiento
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title='NO'
            mode="elevated"
            icon="thumb-down-outline"
            testID='primary-button-no'
            style={[
              styles.button,
              { backgroundColor: theme.colors.inversePrimary }
            ]}
            labelStyle={styles.buttonLabel}
            textColor={theme.colors.onSecondaryContainer}
            onPress={() => navigation.navigate('SlideFour', {
              values: {
                ...values,
                entiesamiento: false
              }
            })}
          />
          <Button
            title='SI'
            mode="elevated"
            icon="thumb-up-outline"
            testID='primary-button-yes'
            style={[
              styles.button,
              { backgroundColor: theme.colors.inverseOnSurface }
            ]}
            labelStyle={styles.buttonLabel}
            textColor={theme.colors.onSecondaryContainer}
            onPress={() => navigation.navigate('SlideFour', {
              values: {
                ...values,
                entiesamiento: true
              }
            })}
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
    marginTop: 50,
    paddingHorizontal: 20
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  imageContainer: {
    height: 450,
    borderWidth: 2,
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
  button: {
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

export default SlideThree
