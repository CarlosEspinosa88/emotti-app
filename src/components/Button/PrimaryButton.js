import React from "react";
import { Button, useTheme } from 'react-native-paper';

function PrimaryButton({ 
  mode,
  title,
  textColor,
  icon = '',
  dark = false,
  uppercase = false,
  disabled = false,
  loading = false,
  accessibilityLabel = 'button',
  accessibilityHint = 'hint_button',
  onPress = () => {}, 
  style = {},
  labelStyle = {},
  buttonColor = '',
  testID
}) {
  const theme = useTheme()

  return (
    <Button 
      testID={testID}
      dark={dark}
      mode={mode}
      icon={icon}
      style={style}
      loading={loading}
      disabled={disabled}
      uppercase={uppercase}
      textColor={textColor}
      labelStyle={labelStyle}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      buttonColor={buttonColor || theme.colors.secondary}
      rippleColor={theme.colors.ripple}
      onPress={onPress}
    >
    {title}
  </Button>
  )
}

export default PrimaryButton;
