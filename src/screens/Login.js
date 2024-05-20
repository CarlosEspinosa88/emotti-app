import React, { useCallback, useRef, useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { useTheme } from 'react-native-paper';
import { EMAIL_REGEX, NAME, EMAIL } from "../constants"
import Button from "../components/Button"

const Login = ({ navigation }) => {
  const theme = useTheme()
  const inputRefName = useRef(null);
  const inputRefEmail = useRef(null);
  const [error, setInputError] = useState({
    name: false,
    email: false
  })
  const [disabled, setDisabled] = useState(true)

  const handleDisable = useCallback(() => {
    if (Object.values(error).includes(true)) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }, [error])
  

  const handleButtonNavigation = useCallback(() => {
    navigation.navigate('Home');
    setDisabled(true)
  }, [error]) 

  const refUserEmail = useCallback((e, inputName) => {
    if (inputRefEmail.current) {
      inputRefEmail.current.value = e

      if (!EMAIL_REGEX.test(inputRefEmail.current.value)) {
        setInputError((prevState)=> ({
          ...prevState,
          [inputName]: true
        }))
      } else {
        setInputError((prevState)=> ({
          ...prevState,
          [inputName]: false
        }))
      }
    }
  }, [error])

  const refUserName = useCallback((e, inputName) => {
    if (inputRefName.current) {
      inputRefName.current.value = e

      if (inputRefName.current.value === "") {
        setInputError((prevState)=> ({
          ...prevState,
          [inputName]: true
        }))
      } else {
        setInputError((prevState)=> ({
          ...prevState,
          [inputName]: false
        }))
      } 
    }
  }, [error])

  useEffect(() => {
    if(inputRefName.current) {
      inputRefName.current.focus()
    }
  }, [])

  useEffect(() => {
    handleDisable()
  }, [error])

  return (
    <View style={styles.container}>
      <TextInput
        name={NAME}
        ref={inputRefName}
        allowFontScaling={false}
        placeholderTextColor={error?.name ? 'red' :'#979797'}
        placeholder={error?.name ? 'Campo obligatorio' : 'Ingresa tu nombre'}
        style={error?.name ? styles.inputError : styles.input}
        onChangeText={(e) => refUserName(e, NAME)}
      />
      <TextInput
        name={EMAIL}
        ref={inputRefEmail}
        autoCapitalize="none"
        allowFontScaling={false}
        placeholderTextColor={error?.email ? 'red' : '#979797'}
        placeholder={error?.email ? 'Campo obligatorio' : 'Ingresa tu email'}
        style={error?.email ? styles.inputError : styles.input}
        onChangeText={(e) => refUserEmail(e, EMAIL)}
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
          : { backgroundColor: theme.colors.inversePrimary }
        ]}
        labelStyle={styles.buttonLabel}
        textColor={theme.colors.onSecondaryContainer}
        onPress={handleButtonNavigation} 
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
