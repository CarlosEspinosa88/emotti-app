import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { useTheme } from 'react-native-paper';
import { ImageOne } from '../images'
import Button from '../components/Button'

function SlideOne({ navigation }) {
  const theme = useTheme()

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
            <Image source={ImageOne} style={styles.image} />
            <View style={styles.labelContainer}>
              <Text style={[
                styles.mainText,
                { color: theme.colors.custom0 }
              ]}>
                Tos
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
            onPress={() => {
              navigation.navigate('SlideTwo', {
                values: { atormentado: false }
              })
            }}
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
    marginTop: 50,
    paddingHorizontal: 20,
  },
  mainText: {
    fontWeight: 'bold',
    fontSize: 22
  },
  imageContainer: {
    height: 450,
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

export default SlideOne

// import React, {useCallback, useRef, useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   TouchableOpacity,
// } from 'react-native';

// const SlideOne = () => {
//   const [value, setInputValue] = useState({
//     name: '',
//     email: ''
//   })
//   const [error, setInputError] = useState({
//     name: false,
//     email: false
//   })
//   const [disabled, setDisabled] = useState(true)
//   const inputRefName = useRef(null);
//   const inputRefEmail = useRef(null);

//   const handleDisable = useCallback(() => {
//     setDisabled(Object.values(error).includes(true) || Object.values(value).includes(''))
//   })
  
//   const handleSetNative = useCallback(() => {
//     // inputRefName.current.clear()
//     // inputRefEmail.current.clear()

//     setInputValue((prevState) => ({
//       ...prevState,
//       name: '',
//       email: ''
//     }))

//     setInputError((prevState) => ({
//       ...prevState,
//       name: false,
//       email: false
//     }))

//   }, []);

//   const handleOnChange = useCallback((name, value) => {
//     setInputValue((prevState) => ({
//       ...prevState,
//       [name]: value
//     }))
//   }, [value])

//   const handleOnBlur = useCallback((name, validValue) => {
//     if (name === 'email') {
//       const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//       if (value[name].length === 0 || !emailRegex.test(validValue)) {
//         setInputError((prevState)=> ({
//           ...prevState,
//           [name]: true
//         }))
//       } else if (value[name].length > 1 || emailRegex.test(validValue)) {
//         setInputError((prevState)=> ({
//           ...prevState,
//           [name]: false
//         }))
//       }
//     } else {
//       if (value[name].length === 0) {
//         setInputError((prevState)=> ({
//           ...prevState,
//           [name]: true
//         }))
//       } else if (value[name].length > 1) {
//         setInputError((prevState)=> ({
//           ...prevState,
//           [name]: false
//         }))
//       }
//     }
//   }, [value])

//   useEffect(() => {
//     inputRefName.current.focus()
//   }, [])

//   useEffect(() => {
//     handleDisable()
//   }, [value, error])

//   return (
//     <View style={styles.container}>
//       <TextInput 
//         autoFocus
//         name="name"
//         value={value.name}
//         ref={inputRefName}
//         allowFontScaling={false}
//         placeholderTextColor={error?.name ? 'red' :'#979797'}
//         placeholder={error?.name ? 'Campo obligatorio' : 'Ingresa tu nombre'}
//         style={error?.name ? styles.inputError : styles.input}
//         onBlur={(e) => handleOnBlur('name', e.nativeEvent.text)}
//         onChange={(e) => handleOnChange('name', e.nativeEvent.text)}
//       />
//       <TextInput
//         name="email"
//         ref={inputRefEmail}
//         value={value.email}
//         placeholderTextColor={error?.email ? 'red' :'#979797'}
//         placeholder={error?.email ? 'Campo obligatorio' : 'Ingresa tu email'}
//         style={error?.email ? styles.inputError : styles.input}
//         onBlur={(e) => handleOnBlur('email', e.nativeEvent.text)}
//         onChange={(e) => handleOnChange('email', e.nativeEvent.text)}
//       />
//       <TouchableOpacity
//         disabled={disabled}
//         style={styles.button}
//         onPress={handleSetNative}
//       >
//         <Text style={styles.buttonText}>
//           Registrar nuevo usuario
//         </Text>    
//       </TouchableOpacity>
//       <Text>{value?.name}</Text>
//       <Text>{value?.email}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   inputError: {
//     height: 50,
//     width: 250,
//     marginHorizontal: 20,
//     borderWidth: 2,
//     borderColor: 'red',
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     marginHorizontal: 20,
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//   },
//   button: {
//     width: 250,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },
//   input: {
//     height: 50,
//     width: 250, 
//     paddingHorizontal: 10,
//     marginBottom: 10,
//     marginHorizontal: 20,
//     borderWidth: 1,
//     borderRadius: 5,
//     borderColor: '#ccc',
//   },
// });

// export default SlideOne;