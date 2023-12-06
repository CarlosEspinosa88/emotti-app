import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import Button from "../components/Button"

const Login = ({ navigation }) => {
  const theme = useTheme()
  const inputRefName = useRef(null);
  const [value, setInputValue] = useState({
    name: '',
    email: ''
  })
  const [error, setInputError] = useState({
    name: false,
    email: false
  })
  const [disabled, setDisabled] = useState(true)

  const handleDisable = useCallback(() => {
    setDisabled(Object.values(error).includes(true) || Object.values(value).includes(''))
  }, [error, value])
  
  const handleSetNative = useCallback(() => {
    navigation.navigate('Home');

    setInputValue((prevState) => ({
      ...prevState,
      name: '',
      email: ''
    }))

    setInputError((prevState) => ({
      ...prevState,
      name: false,
      email: false
    }))
  }, []) 

  const handleOnChange = useCallback((name, value) => {
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }, [value])

  const handleOnBlur = useCallback((name, validValue) => {
    if (name === 'email') {
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (value[name].length === 0 || !emailRegex.test(validValue)) {
        setInputError((prevState)=> ({
          ...prevState,
          [name]: true
        }))
      } else if (value[name].length > 1 || emailRegex.test(validValue)) {
        setInputError((prevState)=> ({
          ...prevState,
          [name]: false
        }))
      }
    } else {
      if (value[name].length === 0) {
        setInputError((prevState)=> ({
          ...prevState,
          [name]: true
        }))
      } else if (value[name].length > 1) {
        setInputError((prevState)=> ({
          ...prevState,
          [name]: false
        }))
      }
    }
  }, [value])

  useEffect(() => {
    inputRefName.current.focus()
  }, [])

  useEffect(() => {
    handleDisable()
  }, [value, error])

  return (
    <View style={styles.container}>
      <TextInput
        name="name"
        value={value.name}
        ref={inputRefName}
        allowFontScaling={false}
        placeholderTextColor={error?.name ? 'red' :'#979797'}
        placeholder={error?.name ? 'Campo obligatorio' : 'Ingresa tu nombre'}
        style={error?.name ? styles.inputError : styles.input}
        onBlur={(e) => handleOnBlur('name', e.nativeEvent.text)}
        onChange={(e) => handleOnChange('name', e.nativeEvent.text)}
      />
      <TextInput
        name="email"
        autoCapitalize="none"
        value={value.email}
        allowFontScaling={false}
        placeholderTextColor={error?.email ? 'red' : '#979797'}
        placeholder={error?.email ? 'Campo obligatorio' : 'Ingresa tu email'}
        style={error?.email ? styles.inputError : styles.input}
        onBlur={(e) => handleOnBlur('email', e.nativeEvent.text)}
        onChange={(e) => handleOnChange('email', e.nativeEvent.text)}
      />
      <Button
        disabled={disabled}
        icon="login"
        mode="elevated"
        title='Registrar nuevo usuario'
        style={[
          styles.button,
          disabled 
          ? { backgroundColor: theme.colors.surface } 
          : {backgroundColor: theme.colors.inversePrimary }
        ]}
        labelStyle={styles.buttonLabel}
        textColor={theme.colors.onSecondaryContainer}
        onPress={handleSetNative} 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputError: {
    height: 50,
    width: 250,
    marginHorizontal: 20,
    borderWidth: 2,
    borderColor: 'red',
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 50,
  },
  button: {
    width: 250,
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
  input: {
    height: 50,
    width: 250, 
    paddingHorizontal: 10,
    marginBottom: 10,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ccc',
  },
});

export default Login;