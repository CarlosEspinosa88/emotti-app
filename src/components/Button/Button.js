import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native"

function Button({ title, onPress, style, color }) {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={[styles.textColor, color]}>
        {title}
      </Text>
    </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    width: '80%',
    alignItems: 'center',
    backgroundColor: '#DDD'
  },
  textColor: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Button;
